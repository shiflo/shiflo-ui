import styled from "basic-styled";

function GlobalStyle() {
  return <StyledGlobal globalStyle />;
}

const StyledGlobal = styled.style`
  html,
  body {
    background-color: ${({
      theme: {
        palette: { common }
      }
    }) => common.background};
    color: ${({
      theme: {
        palette: { text }
      }
    }) => text.primary};
    font-family:
      Spoqa Han Sans Neo,
      -apple-system-,
      BlinkMacSystemFont,
      Helvetica Neue,
      Apple SD Gothic Neo,
      Malgun Gothic,
      Nanum Gothic,
      Noto Sans KR,
      Noto Sans CJK KR,
      arial,
      Dotum,
      Tahoma,
      Geneva,
      sans-serif;
    transition:
      background-color 0.2s,
      color 0.2s;
  }
`;

export default GlobalStyle;
