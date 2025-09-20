import styled from "@emotion/styled";

import { motion } from "motion/react";

import {
  BaseButtonProps,
  FilledButtonProps,
  GhostButtonProps,
  GradientButtonProps,
  TextButtonProps
} from "@components/Button/Button.typing";

export const StyledButton = styled(motion.button)<
  BaseButtonProps & (FilledButtonProps | GhostButtonProps | TextButtonProps | GradientButtonProps)
>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: { spacing } }) => spacing["100"]};
  font-weight: 500;
  transition: all 0.2s;

  ${({ theme, variant, size, color }) => {
    const {
      mode,
      palette: { primary, secondary, neutral, gradient },
      typography: { body1, body2, small1, small2 },
      spacing,
      radius
    } = theme;
    const style = {};

    switch (variant) {
      case "ghost":
        Object.assign(style, {
          backgroundColor: primary.alpha["10"],
          color: primary.main,
          "& svg": {
            color: primary.main
          },
          "@media (hover: hover)": {
            "&:hover": {
              backgroundColor: primary.alpha["20"]
            }
          },
          "&:active": {
            backgroundColor: primary.alpha["30"]
          },
          "&:disabled": {
            backgroundColor: mode === "dark" ? primary.alpha["10"] : primary.alpha["5"],
            color: neutral["500"],
            cursor: "not-allowed"
          }
        });
        break;
      case "text":
        Object.assign(style, {
          backgroundColor: "transparent",
          color: mode === "dark" ? neutral["800"] : neutral["700"], // 기본 텍스트 색상 (더 강조된 중립색)
          "& svg": {
            color: mode === "dark" ? neutral["800"] : neutral["700"]
          },
          "@media (hover: hover)": {
            "&:hover": {
              backgroundColor: neutral["200"]
            }
          },
          "&:active": {
            backgroundColor: neutral["300"]
          },
          "&:disabled": {
            color: neutral["500"],
            backgroundColor: "transparent",
            cursor: "not-allowed",
            textDecoration: "none"
          }
        });
        break;
      case "gradient":
        Object.assign(style, {
          background: gradient.primaryToAccent,
          color: mode === "dark" ? neutral["900"] : secondary.main,
          "& svg": {
            color: mode === "dark" ? neutral["900"] : secondary.main
          },
          "@media (hover: hover)": {
            "&:hover": {
              background: gradient.primaryToAccent
            }
          },
          "&:active": {
            background: gradient.primaryToAccent,
            boxShadow: `inset 0 0 0 100px ${primary.dark}`
          },
          "&:disabled": {
            background: neutral["200"],
            color: neutral["500"],
            cursor: "not-allowed",
            boxShadow: "none"
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
            "@media (hover: hover)": {
              "&:hover": {
                backgroundColor: secondary.light
              }
            },
            "&:active": {
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
          "@media (hover: hover)": {
            "&:hover": {
              backgroundColor: primary.hover
            }
          },
          "&:active": {
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
          lineHeight: body1.lineHeight,
          "& svg": {
            width: body1.fontSize,
            height: body1.fontSize
          }
        });
        break;
      case "small":
        Object.assign(style, {
          padding: `${spacing["100"]} ${spacing["150"]}`,
          borderRadius: radius["200"],
          fontSize: small1.fontSize,
          lineHeight: small1.lineHeight,
          "& svg": {
            width: small1.fontSize,
            height: small1.fontSize
          }
        });
        break;
      case "xSmall":
        Object.assign(style, {
          padding: `${spacing["50"]} ${spacing["100"]}`,
          borderRadius: radius["150"],
          fontSize: small2.fontSize,
          lineHeight: small2.lineHeight,
          "& svg": {
            width: small2.fontSize,
            height: small2.fontSize
          }
        });
        break;
      default:
        Object.assign(style, {
          padding: `${spacing["200"]} ${spacing["250"]}`,
          borderRadius: radius["250"],
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
  }}
`;
