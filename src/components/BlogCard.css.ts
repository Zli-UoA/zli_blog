import { fontSize, fontWeight, lineHeight } from "@/utils/style/text.css";
import { style } from "@vanilla-extract/css";

export const title = style([
  fontSize.px16,
  fontWeight.bold,
  lineHeight.per175,
])

export const authorName = style([
  fontSize.px14,
  fontWeight.normal,
  lineHeight.per150,
])
