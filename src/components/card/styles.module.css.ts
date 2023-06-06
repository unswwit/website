import { style } from "@vanilla-extract/css";

export const card = style({
  backgroundColor: "ECECEC",
  color: "#000",
  padding: "1rem",
  borderRadius: "0.5rem",
  boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});