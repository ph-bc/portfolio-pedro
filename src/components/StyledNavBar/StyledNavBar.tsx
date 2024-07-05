import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

export default function StyledNavBar() {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <MenuItem>Sobre Mim</MenuItem>
          <MenuItem>Habilidades</MenuItem>
          <MenuItem>Projetos</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
}
