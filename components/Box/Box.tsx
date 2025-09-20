import { StyledBox } from "@components/Box/Box.styles";

import type { BoxComponent } from "@components/Box/Box.typing";

const Box: BoxComponent = (props) => {
  return <StyledBox {...props} css={props.css} />;
};

export default Box;
