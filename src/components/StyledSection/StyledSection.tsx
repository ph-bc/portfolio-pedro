import { styled } from "@mui/material";

interface StyledSectionProps {
  children: React.ReactNode;
  darkBackground?: boolean;
}
export default function StyledSection({
  children,
  darkBackground = false,
}: StyledSectionProps) {
  const StyledSection = styled("section")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: darkBackground
      ? theme.palette.primary.main
      : theme.palette.primary.contrastText,
  }));

  return <StyledSection>{children}</StyledSection>;
}
