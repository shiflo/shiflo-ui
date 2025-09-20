export interface FPSMetrics {
  fps: number;
  averageFPS: number;
  minFPS: number;
  maxFPS: number;
  frameCount: number;
  duration: number;
}

export interface FPSOptions {
  /** 측정 지속 시간 (밀리초) */
  duration?: number;
  /** 평균 FPS 계산을 위한 샘플 수 */
  sampleSize?: number;
  /** 콜백 함수 호출 간격 (프레임 수) */
  callbackInterval?: number;
}

/**
 * requestAnimationFrame을 사용한 FPS 측정기
 */
export class FPSChecker {
  private startTime: number = 0;
  private lastTime: number = 0;
  private frameCount: number = 0;
  private fpsHistory: number[] = [];
  private animationId: number | null = null;
  private isRunning: boolean = false;

  private options: Required<FPSOptions>;
  private onUpdate?: (metrics: FPSMetrics) => void;
  private onComplete?: (metrics: FPSMetrics) => void;

  constructor(
    options: FPSOptions = {},
    callbacks?: {
      onUpdate?: (metrics: FPSMetrics) => void;
      onComplete?: (metrics: FPSMetrics) => void;
    }
  ) {
    this.options = {
      duration: options.duration ?? 5000, // 기본 5초
      sampleSize: options.sampleSize ?? 60, // 기본 60프레임 샘플
      callbackInterval: options.callbackInterval ?? 10 // 기본 10프레임마다 콜백
    };

    this.onUpdate = callbacks?.onUpdate;
    this.onComplete = callbacks?.onComplete;
  }

  /**
   * FPS 측정 시작
   */
  start(): void {
    if (this.isRunning) {
      // eslint-disable-next-line no-console
      console.warn("FPS 측정이 이미 실행 중입니다.");
      return;
    }

    this.isRunning = true;
    this.startTime = performance.now();
    this.lastTime = this.startTime;
    this.frameCount = 0;
    this.fpsHistory = [];
    this.animationId = requestAnimationFrame(this.measure.bind(this));
  }

  /**
   * FPS 측정 중지
   */
  stop(): FPSMetrics {
    if (!this.isRunning) {
      throw new Error("FPS 측정이 실행 중이 아닙니다.");
    }

    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }

    return this.getMetrics();
  }

  /**
   * 현재 측정 중인지 확인
   */
  get running(): boolean {
    return this.isRunning;
  }

  /**
   * 현재까지의 측정 결과 반환
   */
  getMetrics(): FPSMetrics {
    const currentTime = performance.now();
    const duration = currentTime - this.startTime;
    const currentFPS = this.frameCount > 0 ? (this.frameCount / duration) * 1000 : 0;

    const averageFPS =
      this.fpsHistory.length > 0
        ? this.fpsHistory.reduce((sum, fps) => sum + fps, 0) / this.fpsHistory.length
        : currentFPS;

    const minFPS = this.fpsHistory.length > 0 ? Math.min(...this.fpsHistory) : currentFPS;
    const maxFPS = this.fpsHistory.length > 0 ? Math.max(...this.fpsHistory) : currentFPS;

    return {
      fps: currentFPS,
      averageFPS,
      minFPS,
      maxFPS,
      frameCount: this.frameCount,
      duration
    };
  }

  private measure(currentTime: number): void {
    if (!this.isRunning) return;

    this.frameCount++;

    // FPS 계산 (1초마다)
    if (currentTime - this.lastTime >= 1000) {
      const fps = (this.frameCount / (currentTime - this.startTime)) * 1000;
      this.fpsHistory.push(fps);

      // 샘플 크기 제한
      if (this.fpsHistory.length > this.options.sampleSize) {
        this.fpsHistory.shift();
      }

      this.lastTime = currentTime;
    }

    // 콜백 호출
    if (this.frameCount % this.options.callbackInterval === 0) {
      this.onUpdate?.(this.getMetrics());
    }

    // 측정 시간 완료 확인
    if (currentTime - this.startTime >= this.options.duration) {
      this.stop();
      this.onComplete?.(this.getMetrics());
      return;
    }

    this.animationId = requestAnimationFrame(this.measure.bind(this));
  }
}

/**
 * 간단한 FPS 측정 함수
 * @param duration 측정 지속 시간 (밀리초)
 * @returns Promise<FPSMetrics>
 */
export function measureFPS(duration: number = 5000): Promise<FPSMetrics> {
  return new Promise((resolve) => {
    const checker = new FPSChecker({ duration }, { onComplete: resolve });
    checker.start();
  });
}

/**
 * 실시간 FPS 모니터링 함수
 * @param onUpdate FPS 업데이트 콜백
 * @param options 측정 옵션
 * @returns FPSChecker 인스턴스
 */
export function monitorFPS(
  onUpdate: (metrics: FPSMetrics) => void,
  options: FPSOptions = {}
): FPSChecker {
  const checker = new FPSChecker(options, { onUpdate });
  checker.start();
  return checker;
}

/**
 * Performance API를 사용한 프레임레이트 측정
 * 더 정확하지만 브라우저 지원이 제한적
 */
export function measureFPSWithPerformanceAPI(): Promise<FPSMetrics> {
  return new Promise((resolve, reject) => {
    if (!("PerformanceObserver" in window)) {
      reject(new Error("PerformanceObserver를 지원하지 않는 브라우저입니다."));
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const frameEntries = entries.filter((entry) => entry.entryType === "frame");

      if (frameEntries.length > 0) {
        const durations = frameEntries.map((entry) => entry.duration);
        const averageFrameTime =
          durations.reduce((sum, duration) => sum + duration, 0) / durations.length;
        const fps = 1000 / averageFrameTime;

        observer.disconnect();

        resolve({
          fps,
          averageFPS: fps,
          minFPS: fps,
          maxFPS: fps,
          frameCount: frameEntries.length,
          duration: frameEntries[frameEntries.length - 1].startTime - frameEntries[0].startTime
        });
      }
    });

    try {
      observer.observe({ entryTypes: ["frame"] });

      // 3초 후 자동으로 측정 종료
      setTimeout(() => {
        observer.disconnect();
        reject(new Error("측정 시간이 초과되었습니다."));
      }, 3000);
    } catch (error) {
      reject(error);
    }
  });
}
