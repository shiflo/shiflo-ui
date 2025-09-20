import Box from "@components/Box";
import FPSMonitor from "@components/FPSMonitor";

import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof FPSMonitor> = {
  title: "Lab/FPSMonitor",
  component: FPSMonitor,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "실시간 FPS(Frames Per Second) 측정 및 60프레임 달성 여부를 체크하는 컴포넌트입니다."
      }
    }
  },
  argTypes: {
    trigger: {
      control: "boolean",
      description: "측정 시작 트리거"
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "측정 지속 시간 (밀리초)"
    },
    updateInterval: {
      control: { type: "number", min: 1, max: 60, step: 1 },
      description: "업데이트 간격 (프레임 수)"
    },
    threshold: {
      control: { type: "number", min: 30, max: 60, step: 1 },
      description: "60프레임 달성 임계값"
    },
    onComplete: {
      action: "측정 완료",
      description: "측정 완료 시 호출되는 콜백 함수"
    },
    on60FPSAchieved: {
      action: "60프레임 달성",
      description: "60프레임 달성 여부가 결정될 때 호출되는 콜백 함수"
    }
  }
};

export default meta;
type Story = StoryObj<typeof FPSMonitor>;

export const Default: Story = {
  args: {
    trigger: false,
    duration: 5000,
    updateInterval: 10,
    threshold: 55
  },
  render: (args) => {
    return (
      <Box style={{ width: "100vh" }}>
        <FPSMonitor {...args} />
      </Box>
    );
  }
};
