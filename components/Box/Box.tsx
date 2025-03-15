import { StyledBox } from "@components/Box/Box.styles";
import { BoxProps } from "@components/Box/Box.typing";

function Box(props: BoxProps) {
  return <StyledBox {...props} />;
}

export default Box;
