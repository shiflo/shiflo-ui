import styled from "basic-styled";

import { SwitchProps } from "@components/Switch/Switch.typing";

export const StyledSwitch = styled.button<
  Pick<SwitchProps, "checked" | "disabled" | "size"> & {
    ease: "in" | "out";
  }
>`
  position: relative;
  border-radius: 9999px;
  transition:
    width 0.2s,
    height 0.2s,
    background-color 0.2s;
  cursor: pointer;

  ${({ theme: { palette }, checked, disabled, size }) => {
    const style = {};

    if (size === "small") {
      Object.assign(style, {
        width: "40px",
        height: "24px",
        "&::after": {
          width: "16px",
          height: "16px"
        }
      });
    } else if (size === "medium") {
      Object.assign(style, {
        width: "48px",
        height: "28px",
        "&::after": {
          width: "20px",
          height: "20px"
        }
      });
    } else if (size === "large") {
      Object.assign(style, {
        width: "56px",
        height: "32px",
        "&::after": {
          width: "24px",
          height: "24px"
        }
      });
    }

    if (checked) {
      Object.assign(style, {
        backgroundColor: palette.primary.main
      });
    } else {
      Object.assign(style, {
        backgroundColor: palette.neutral["300"]
      });
    }

    if (disabled) {
      Object.assign(style, {
        backgroundColor: palette.neutral["200"]
      });
    }

    return style;
  }};

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${({
      theme: {
        palette: { common }
      }
    }) => common.background};
    border-radius: 50%;
    transition:
      width 0.2s,
      height 0.2s,
      background-color 0.2s,
      transform 0.2s ${({ ease }) => (ease === "in" ? "ease-in" : "ease-out")};
    transform: ${({ theme: { spacing }, checked }) =>
      checked
        ? `translate3d(calc(100% + ${spacing["100"]}), -50%, 0)`
        : `translate3d(${spacing["100"]}, -50%, 0)`};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
