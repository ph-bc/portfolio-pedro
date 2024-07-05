import { styled } from "@mui/material";

interface StyledSectionProps {
  id: string;
  darkBackground?: boolean;
  children: React.ReactNode;
}
export default function StyledSection({
  id,
  darkBackground = false,
  children,
}: StyledSectionProps) {
  const StyledSection = styled("section")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: darkBackground
      ? theme.palette.primary.main
      : theme.palette.primary.contrastText,
  }));

  return <StyledSection id={id}>{children}</StyledSection>;
}
