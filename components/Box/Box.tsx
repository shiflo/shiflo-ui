import { StyledBox } from "@components/Box/Box.styles";
import { BoxComponent } from "@components/Box/Box.typing";

const Box: BoxComponent = (props) => {
  return <StyledBox {...props} />;
};

export default Box;
