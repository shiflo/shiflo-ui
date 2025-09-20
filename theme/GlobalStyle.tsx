import { Global, useTheme } from "@emotion/react";

function GlobalStyle() {
  const {
    palette: { common, text }
  } = useTheme();

  return (
    <Global
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          font: "inherit",
          color: "inherit",
          WebkitTapHighlightColor: "transparent",
          userSelect: "none"
        },
        "*, :after, :before": {
          boxSizing: "border-box",
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased"
        },
        ":root": {
          WebkitTextSizeAdjust: "100%",
          textSizeAdjust: "100%",
          cursor: "default",
          overflowWrap: "break-word",
          MozTabSize: 4,
          tabSize: 4
        },
        "html, body": {
          height: "100%",
          color: text.primary,
          backgroundColor: common.background,
          transition: "background-color 0.2s, color 0.2s",
          fontFamily: `Spoqa Han Sans Neo, -apple-system, BlinkMacSystemFont, Helvetica Neue,
            Apple SD Gothic Neo, Malgun Gothic, 맑은 고딕, 나눔고딕, Nanum Gothic,
            Noto Sans KR, Noto Sans CJK KR, arial, 돋움, Dotum, Tahoma, Geneva, sans-serif`
        },
        "input, textarea": {
          userSelect: "text"
        },
        "picture, video, canvas": {
          display: "block",
          maxWidth: "100%"
        },
        "svg, img, video": {
          verticalAlign: "middle"
        },
        button: {
          background: "none",
          border: 0,
          cursor: "pointer"
        },
        a: {
          textDecoration: "none"
        },
        table: {
          borderCollapse: "collapse",
          borderSpacing: 0
        },
        ul: {
          listStyle: "none"
        }
      }}
    />
  );
}

export default GlobalStyle;
