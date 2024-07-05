import { styled } from "@mui/material";

interface StyledButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function StyledButton({ children, onClick }: StyledButtonProps) {
  const StyledButton = styled("button")(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.contrastText}`,
    backgroundColor: "transparent",
    borderRadius: "3px",
    color: theme.palette.primary.contrastText,
    width: "100%",
    padding: "5px 15px",
    display: "inline-flex",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    gap: "10px",
    transition: "background-color 0.3s ease-in-out",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  }));

  return (
    <>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </>
  );
}
