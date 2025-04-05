import radius from "@theme/radius";
import spacing from "@theme/spacing";
import { UtilityProps } from "@typings/utility";

export default function getUtilityProps<T>({
  display,
  flex,
  flexBasis,
  flexDirection,
  flexFlow,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
  alignItems,
  m,
  mt,
  mr,
  mb,
  ml,
  p,
  pt,
  pr,
  pb,
  pl,
  border,
  borderTop,
  borderBottom,
  borderRight,
  borderLeft,
  br,
  brtl,
  brtr,
  brml,
  brmr,
  gap
}: T & UtilityProps) {
  const style = {};

  if (display) {
    Object.assign(style, { display });
  }

  if (flex) {
    Object.assign(style, { flex });
  }

  if (flexBasis) {
    Object.assign(style, { flexBasis });
  }

  if (flexDirection) {
    Object.assign(style, { flexDirection });
  }

  if (flexFlow) {
    Object.assign(style, { flexFlow });
  }

  if (flexGrow) {
    Object.assign(style, { flexGrow });
  }

  if (flexShrink) {
    Object.assign(style, { flexShrink });
  }

  if (flexWrap) {
    Object.assign(style, { flexWrap });
  }

  if (justifyContent) {
    Object.assign(style, { justifyContent });
  }

  if (alignItems) {
    Object.assign(style, { alignItems });
  }

  if (m) {
    Object.assign(style, { margin: spacing[m] });
  }

  if (mt) {
    Object.assign(style, { marginTop: spacing[mt] });
  }

  if (mb) {
    Object.assign(style, { marginRight: spacing[mb] });
  }

  if (ml) {
    Object.assign(style, { marginLeft: spacing[ml] });
  }

  if (mr) {
    Object.assign(style, { marginRight: spacing[mr] });
  }

  if (p) {
    Object.assign(style, { padding: spacing[p] });
  }

  if (pt) {
    Object.assign(style, { paddingTop: spacing[pt] });
  }

  if (pb) {
    Object.assign(style, { paddingRight: spacing[pb] });
  }

  if (pl) {
    Object.assign(style, { paddingLeft: spacing[pl] });
  }

  if (pr) {
    Object.assign(style, { paddingRight: spacing[pr] });
  }

  if (gap) {
    Object.assign(style, { gap: spacing[gap] });
  }

  if (border) {
    Object.assign(style, { border });
  }

  if (borderTop) {
    Object.assign(style, { borderTop });
  }

  if (borderBottom) {
    Object.assign(style, { borderBottom });
  }

  if (borderRight) {
    Object.assign(style, { borderRight });
  }

  if (borderLeft) {
    Object.assign(style, { borderLeft });
  }

  if (br) {
    Object.assign(style, { borderRadius: radius[br] });
  }

  if (brtl) {
    Object.assign(style, { borderTopLeftRadius: radius[brtl] });
  }

  if (brtr) {
    Object.assign(style, { borderTopRightRadius: radius[brtr] });
  }

  if (brml) {
    Object.assign(style, { borderBottomLeftRadius: radius[brml] });
  }

  if (brmr) {
    Object.assign(style, { borderBottomRightRadius: radius[brmr] });
  }

  return style;
}
