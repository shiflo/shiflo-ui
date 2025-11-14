import styled from "@emotion/styled";

import type { TextFieldProps } from "@components/TextField/TextField.typing";

export const StyledTextField = styled.div<
  Pick<TextFieldProps, "variant" | "fullWidth" | "size" | "disabled"> & {
    focused: boolean;
  }
>`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing["200"]};
  border: 1px solid transparent;
  border-radius: ${({ theme: { radius } }) => radius["200"]};
  transition: all 0.2s;
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.background};
  overflow: hidden;

  ${({
    theme: {
      palette: { border, secondary }
    },
    variant
  }) => {
    const style = {};

    switch (variant) {
      case "outlined":
        Object.assign(style, {
          borderColor: border.main
        });
        break;
      default:
        Object.assign(style, {
          backgroundColor: secondary.main,
          borderColor: "transparent"
        });
        break;
    }

    return style;
  }};

  ${({
    theme: {
      spacing,
      typography: { small1, body2, body1 }
    },
    size
  }) => {
    const style = {};

    switch (size) {
      case "small":
        Object.assign(style, {
          padding: `${spacing["100"]} ${spacing["150"]}`,
          fontSize: small1.fontSize,
          lineHeight: small1.lineHeight,
          "& svg": {
            width: small1.fontSize,
            height: small1.fontSize
          }
        });
        break;
      case "large":
        Object.assign(style, {
          padding: `${spacing["300"]} ${spacing["350"]}`,
          fontSize: body1.fontSize,
          lineHeight: body1.lineHeight,
          "& svg": {
            width: body1.fontSize,
            height: body1.fontSize
          }
        });
        break;
      default:
        Object.assign(style, {
          padding: `${spacing["200"]} ${spacing["250"]}`,
          fontSize: body2.fontSize,
          lineHeight: body2.lineHeight,
          "& svg": {
            width: body2.fontSize,
            height: body2.fontSize
          }
        });
        break;
    }

    return style;
  }};

  ${({
    theme: {
      palette: { primary }
    },
    variant,
    focused
  }) => {
    const style = {};

    if (variant === "outlined" && focused) {
      Object.assign(style, {
        borderColor: primary.main,
        "& svg": {
          color: primary.main
        }
      });
    }

    return style;
  }};

  ${({ fullWidth }) =>
    fullWidth
      ? {
          width: "100%",
          maxWidth: "100%",
          flexGrow: 1
        }
      : {
          width: "fit-content"
        }};

  ${({
    theme: {
      palette: { neutral }
    },
    disabled
  }) =>
    disabled
      ? {
          backgroundColor: neutral["200"],
          color: neutral["500"],
          cursor: "not-allowed"
        }
      : {}};
`;

export const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: ${({
      theme: {
        palette: { neutral }
      }
    }) => neutral["500"]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const EndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
