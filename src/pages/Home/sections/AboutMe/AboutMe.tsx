import {
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";

export default function About() {
  const StyledSection = styled("section")(({ theme }) => ({
    marginTop: "24px",
    marginBottom: "24px",
    backgroundColor: theme.palette.primary.contrastText,
  }));

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

  const StyledDivider = styled(Divider)(({ theme }) => ({
    width: "100%",
    height: "1px",
    backgroundColor: theme.palette.primary.main,
    marginTop: "24px",
    marginBottom: "12px",
  }));

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {/* Sobre Mim */}
          <Grid item xs={12} md={12}>
            <Typography
              color="primary"
              variant="h2"
              textAlign="center"
              gutterBottom
            >
              Sobre Mim
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={3}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <WorkspacePremiumIcon />
                    <Typography
                      color="primary"
                      variant="body1"
                      fontWeight="bold"
                    >
                      Experiência
                    </Typography>
                    <Typography color="primary" variant="body2">
                      2+ anos
                    </Typography>
                    <Typography color="primary" variant="body2">
                      Assistente de T.I.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <SchoolIcon />
                    <Typography
                      color="primary"
                      variant="body1"
                      fontWeight="bold"
                    >
                      Educação
                    </Typography>
                    <Typography color="primary" variant="body2">
                      Cursando Bacharelado em
                    </Typography>
                    <Typography color="primary" variant="body2">
                      Ciência da Computação
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  color="primary"
                  variant="body1"
                  textAlign="justify"
                  mt={5}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse commodo tellus id finibus congue. Nulla orci
                  metus, dignissim condimentum congue id, condimentum a urna.
                  Vestibulum laoreet ipsum id metus egestas, id volutpat ante
                  vestibulum. Etiam ac risus in turpis semper sagittis. Morbi
                  vel scelerisque nulla. Suspendisse potenti. Nulla at nisl
                  tellus. Fusce non vehicula massa. Mauris posuere, elit a
                  ornare aliquet, enim est hendrerit tellus, sed placerat nulla
                  est ac lacus. Maecenas congue odio ante, sodales sagittis leo
                  pellentesque nec. Aenean ut feugiat ex, nec lacinia ligula.
                </Typography>

                <StyledDivider />
              </Grid>
            </Grid>
          </Grid>

          {/* Habilidades */}
          <Grid item xs={12} md={12}>
            <Typography
              color="primary"
              variant="h3"
              fontWeight="300"
              textAlign="center"
              gutterBottom
            >
              Habilidades
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      React
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Typescript
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Javascript
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      HTML
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      CSS
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      PHP
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
}
