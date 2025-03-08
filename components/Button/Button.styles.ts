import styled from "basic-styled";

import type { ButtonProps } from "./Button.typing";

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:
    background-color 0.2s,
    color 0.2s,
    transform 0.2s ease-out;
  border: 1px solid transparent;

  ${({
    theme: {
      mode,
      palette: { primary, secondary, neutral },
      typography: { body1, body2, small1, small2 },
      spacing,
      radius
    },
    variant,
    size,
    color
  }) => {
    const style = {};

    switch (variant) {
      case "ghost":
        Object.assign(style, {
          backgroundColor: primary.alpha["10"],
          color: primary.main,
          "& svg": {
            color: primary.main
          },
          "&:hover": {
            backgroundColor: primary.alpha["20"]
          },
          "&:active": {
            transform: "scale(0.9)",
            backgroundColor: primary.alpha["30"]
          },
          "&:disabled": {
            backgroundColor: mode === "dark" ? primary.alpha["10"] : primary.alpha["5"],
            color: neutral["500"],
            cursor: "not-allowed"
          }
        });
        break;
      default:
        if (color === "secondary") {
          Object.assign(style, {
            backgroundColor: secondary.main,
            color: mode === "dark" ? neutral["900"] : neutral["700"],
            "& svg": {
              color: mode === "dark" ? neutral["900"] : neutral["700"]
            },
            "&:hover": {
              backgroundColor: secondary.light
            },
            "&:active": {
              transform: "scale(0.9)",
              backgroundColor: secondary.dark
            },
            "&:disabled": {
              backgroundColor: neutral["200"],
              color: neutral["500"],
              cursor: "not-allowed"
            }
          });
          break;
        }

        Object.assign(style, {
          backgroundColor: primary.main,
          color: mode === "dark" ? neutral["900"] : secondary.main,
          "& svg": {
            color: mode === "dark" ? neutral["900"] : secondary.main
          },
          "&:hover": {
            backgroundColor: primary.hover
          },
          "&:active": {
            transform: "scale(0.9)",
            backgroundColor: primary.active
          },
          "&:disabled": {
            backgroundColor: neutral["200"],
            color: neutral["500"],
            cursor: "not-allowed"
          }
        });
        break;
    }

    switch (size) {
      case "large":
        Object.assign(style, {
          padding: `${spacing["300"]} ${spacing["350"]}`,
          borderRadius: radius["300"],
          fontSize: body1.fontSize,
          lineHeight: body1.lineHeight
        });
        break;
      case "small":
        Object.assign(style, {
          padding: `${spacing["100"]} ${spacing["150"]}`,
          borderRadius: radius["200"],
          fontSize: small1.fontSize,
          lineHeight: small1.lineHeight
        });
        break;
      case "xSmall":
        Object.assign(style, {
          padding: `${spacing["50"]} ${spacing["100"]}`,
          borderRadius: radius["150"],
          fontSize: small2.fontSize,
          lineHeight: small2.lineHeight
        });
        break;
      default:
        Object.assign(style, {
          padding: `${spacing["200"]} ${spacing["250"]}`,
          borderRadius: radius["250"],
          fontSize: body2.fontSize,
          lineHeight: body2.lineHeight
        });
        break;
    }

    return style;
  }}
`;
