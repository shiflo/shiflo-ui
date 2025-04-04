import { StyledTag } from "@components/Tag/Tag.styles";
import { TagProps } from "@components/Tag/Tag.typing";

function Tag(props: TagProps) {
  return <StyledTag {...props} />;
}

export default Tag;
