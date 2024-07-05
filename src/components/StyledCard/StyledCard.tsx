import { Card, styled, PaperPropsVariantOverrides } from "@mui/material";

import { OverridableStringUnion } from "@mui/types";

interface StyledCardProps {
  variant:
    | OverridableStringUnion<
        "elevation" | "outlined",
        PaperPropsVariantOverrides
      >
    | undefined;
  children: React.ReactNode;
}
export default function StyledCard({ variant, children }: StyledCardProps) {
  const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    "& .MuiCardContent-root:last-child": {
      padding: "12px",
    },
  }));

  return (
    <>
      <StyledCard variant={variant}>{children}</StyledCard>
    </>
  );
}
