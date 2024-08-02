import { Box, Container, Grid, Typography, styled } from "@mui/material";

import StyledButton from "@components/StyledButton/StyledButton";
import { AnimatedBackground } from "@components/AnimatedBackground/AnimatedBackground";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import avatar from "@assets/images/my-photo.png";

import cv from "@assets/documents/cv-pedro.pdf";

const downloadCV = (cv: string) => {
  try {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "cv-pedro.pdf";
    link.click();
  } catch (error) {
    console.error("Error downloading the file:", error);
  }
};

export default function Hero() {
  const StyledHero = styled("div")(({ theme }) => ({
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",

      "& .MuiTypography-root": {
        zIndex: "1",
        position: "relative",
      },
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "50%",
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={avatar} alt="Minha foto de perfil" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              fontWeight={400}
              textAlign="center"
              pb={2}
            >
              Pedro Berchior
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
            >
              Cientista da Computação
            </Typography>
            <Grid
              container
              display="flex"
              justifyContent="center"
              spacing={3}
              pt={3}
              pb={3}
            >
              <Grid item xs={12} md={5} display="flex" justifyContent="center">
                {/* Download CV Button */}
                <StyledButton
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    downloadCV(cv);
                  }}
                >
                  <FileDownloadIcon />
                  <Typography>Baixe meu CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={5} display="flex" justifyContent="center">
                <StyledButton
                  onClick={() => {
                    window.open(
                      "mailto:pedro_berchior@outlook.com?subject=Contato%20via%20Portfólio",
                      "_self"
                    );
                  }}
                >
                  <AlternateEmailIcon />
                  <Typography>Entre em contato</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
}
