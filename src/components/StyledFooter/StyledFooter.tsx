import { Box, Container, IconButton, Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function StyledFooter() {
  const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(2, 0),
    color: theme.palette.primary.main,
    textAlign: "center",
  }));

  const IconsContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    "& .MuiIconButton-root": {
      color: theme.palette.primary.main,
      margin: theme.spacing(0, 1),
    },
  }));

  return (
    <FooterContainer>
      <Container>
        <IconsContainer>
          <IconButton
            aria-label="GitHub"
            href="https://github.com/your-profile"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://linkedin.com/in/your-profile"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="Email" href="mailto:your-email@example.com">
            <EmailIcon />
          </IconButton>
        </IconsContainer>
        <Typography variant="body1" color="textSecondary" align="center">
          2024 &copy; Pedro Cardoso - Todos os direitos reservados
        </Typography>
      </Container>
    </FooterContainer>
  );
}
