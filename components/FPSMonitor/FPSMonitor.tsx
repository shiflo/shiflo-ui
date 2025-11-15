import { useState, useEffect, useRef } from "react";

import { useTheme } from "@emotion/react";

import Box from "@components/Box";

import { FPSChecker } from "@components/FPSMonitor/FPSMonitor.utils";
import Typography from "@components/Typography";

import type { FPSMetrics } from "@components/FPSMonitor/FPSMonitor.utils";

export interface FPSMonitorProps {
  trigger?: boolean;
  duration?: number;
  updateInterval?: number;
  threshold?: number;
  onComplete?: (metrics: FPSMetrics) => void;
  on60FPSAchieved?: (achieved: boolean) => void;
}

function FPSMonitor({
  trigger = false,
  duration = 5000,
  updateInterval = 10,
  threshold = 55,
  onComplete,
  on60FPSAchieved
}: FPSMonitorProps) {
  const {
    palette: { neutral, primary, feedback, common, border, gradient },
    spacing,
    radius
  } = useTheme();
  const [metrics, setMetrics] = useState<FPSMetrics | null>(null);
  const [is60FPS, setIs60FPS] = useState<boolean | null>(null);

  const isRunningRef = useRef(false);
  const checkerRef = useRef<FPSChecker | null>(null);

  useEffect(() => {
    if (isRunningRef.current) return;

    isRunningRef.current = true;
    setIs60FPS(null);
    setMetrics(null);

    checkerRef.current = new FPSChecker(
      { duration, callbackInterval: updateInterval },
      {
        onUpdate: (newMetrics) => {
          setMetrics(newMetrics);
        },
        onComplete: (finalMetrics) => {
          isRunningRef.current = false;

          setMetrics(finalMetrics);
          onComplete?.(finalMetrics);

          // 60프레임 달성 여부 체크
          const achieved = finalMetrics.averageFPS >= threshold;
          setIs60FPS(achieved);
          on60FPSAchieved?.(achieved);
        }
      }
    );

    checkerRef.current.start();

    return () => {
      if (checkerRef.current) {
        if (isRunningRef.current) {
          checkerRef.current.stop();
        }
      }
    };
  }, [trigger, duration, updateInterval, threshold, on60FPSAchieved, onComplete]);

  const getStatusColor = () => {
    if (!metrics) return neutral[500];
    if (metrics.averageFPS >= 60) return primary.main;
    if (metrics.averageFPS >= 30) return primary.light;
    return feedback.error.main;
  };

  const getStatusText = () => {
    if (!metrics) return "측정 대기 중";
    if (metrics.averageFPS >= 60) return "60프레임 달성!";
    if (metrics.averageFPS >= 30) return "30프레임 이상";
    return "30프레임 미만";
  };

  const getFPSBarColor = (fps: number) => {
    if (fps >= 60) return primary.main;
    if (fps >= 30) return primary.light;
    return feedback.error.main;
  };

  const getFPSBarWidth = (fps: number) => {
    return Math.min((fps / 60) * 100, 100);
  };

  return (
    <div
      style={{
        padding: spacing["600"],
        border: `1px solid ${border.light}`,
        borderRadius: radius["600"],
        backgroundColor: common.surface,
        boxShadow: `0 2px 8px ${neutral[100]}15`,
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: gradient.primaryToAccent,
          opacity: 0.6
        }}
      />
      <Box mb="600">
        <Typography variant="heading3" fontWeight={700} color="primary.main" mb="400">
          FPS 모니터
        </Typography>
      </Box>
      {metrics && (
        <Box mb="600">
          <Typography variant="body1" fontWeight={700} mb="400" style={{ color: getStatusColor() }}>
            상태: {getStatusText()}
          </Typography>
          <Box mb="500">
            <Typography variant="small1" color="text.secondary" mb="300">
              현재 FPS: {metrics.fps.toFixed(1)}
            </Typography>
            <Box
              style={{
                height: "8px",
                backgroundColor: primary.alpha[10],
                borderRadius: radius["150"],
                overflow: "hidden",
                position: "relative"
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${getFPSBarWidth(metrics.fps)}%`,
                  backgroundColor: getFPSBarColor(metrics.fps),
                  borderRadius: radius["150"],
                  position: "relative"
                }}
              />
            </Box>
          </Box>
          <Box
            mb="600"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: spacing["300"],
              backgroundColor: primary.alpha[5],
              padding: spacing["400"],
              borderRadius: radius["400"],
              border: `1px solid ${primary.alpha[20]}`
            }}
          >
            <div>
              <Typography variant="small1" color="text.secondary">
                평균 FPS
              </Typography>
              <Typography variant="body1" fontWeight={700} color="text.primary">
                {metrics.averageFPS.toFixed(1)}
              </Typography>
            </div>
            <div>
              <Typography variant="small1" color="text.secondary">
                최소 FPS
              </Typography>
              <Typography variant="body1" fontWeight={700} color="text.primary">
                {metrics.minFPS.toFixed(1)}
              </Typography>
            </div>
            <div>
              <Typography variant="small1" color="text.secondary">
                최대 FPS
              </Typography>
              <Typography variant="body1" fontWeight={700} color="text.primary">
                {metrics.maxFPS.toFixed(1)}
              </Typography>
            </div>
            <div>
              <Typography variant="small1" color="text.secondary">
                프레임 수
              </Typography>
              <Typography variant="body1" fontWeight={700} color="text.primary">
                {metrics.frameCount}
              </Typography>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <Typography variant="small1" color="text.secondary">
                측정 시간
              </Typography>
              <Typography variant="body1" fontWeight={700} color="text.primary">
                {(metrics.duration / 1000).toFixed(1)}초
              </Typography>
            </div>
          </Box>
        </Box>
      )}
      {is60FPS !== null && (
        <div
          style={{
            width: "100%",
            marginTop: spacing["600"],
            padding: spacing["400"],
            backgroundColor: is60FPS ? primary.alpha[10] : feedback.error.light,
            border: `1px solid ${is60FPS ? primary.main : feedback.error.main}`,
            borderRadius: radius["400"],
            color: is60FPS ? primary.main : feedback.error.dark,
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Typography variant="body1" fontWeight={700}>
            {is60FPS ? "60프레임 달성!" : "60프레임 미달성"}
          </Typography>
          <Typography variant="small1" mt="200" style={{ opacity: 0.8 }}>
            임계값: {threshold}fps
          </Typography>
        </div>
      )}
    </div>
  );
}

export default FPSMonitor;
