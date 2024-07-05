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
          <MenuItem
            onClick={() => {
              const section = document.getElementById("about-me");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Sobre Mim
          </MenuItem>
          <MenuItem
            onClick={() => {
              const section = document.getElementById("skills");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Habilidades
          </MenuItem>
          <MenuItem
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Projetos
          </MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
}
