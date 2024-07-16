import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";

import StyledButton from "@components/StyledButton/StyledButton";
import StyledSection from "@components/StyledSection/StyledSection";

import projects from "@jsons/projects.json";

export default function Projects() {
  const StyledProjectCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "left",
    padding: theme.spacing(2, 1),
    minHeight: "100%",
    backgroundColor: "transparent",
    border: `solid 1px ${theme.palette.primary.contrastText}`,

    "& img": {
      width: "100%",
      borderRadius: "3px",
    },
  }));

  return (
    <StyledSection id="projects" darkBackground>
      <Container maxWidth="lg">
        <Grid container spacing={1} mt={3} mb={6}>
          <Grid item xs={12} md={12}>
            <Typography
              color="primary.contrastText"
              variant="h2"
              textAlign="center"
              gutterBottom
            >
              Meus Projetos
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Grid container spacing={6} justifyContent="center">
              {/* Dynamic cards with JSON */}
              {projects.map((project) => (
                <Grid item xs={12} md={6} key={project.name}>
                  <StyledProjectCard variant="outlined">
                    <CardContent>
                      <Typography
                        color="primary.contrastText"
                        variant="h5"
                        mb={-1}
                      >
                        {project.name}
                      </Typography>
                      <Typography
                        color="primary.contrastText"
                        variant="subtitle1"
                        mb={1}
                      >
                        {project.date}
                      </Typography>
                      <img src={project.cover} alt={project.name} />
                      <Typography
                        color="primary.contrastText"
                        variant="body1"
                        textAlign="justify"
                        mt={1}
                        mb={3}
                      >
                        {project.desc}
                      </Typography>
                      <Typography
                        color="primary.contrastText"
                        variant="body1"
                        textAlign="justify"
                        fontWeight="600"
                      >
                        Tecnologias: {project.technologies}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <StyledButton
                        onClick={() => {
                          window.open(project.project);
                        }}
                      >
                        Ver projeto
                      </StyledButton>
                      <StyledButton
                        onClick={() => {
                          window.open(project.code);
                        }}
                      >
                        Ver código
                      </StyledButton>
                    </CardActions>
                  </StyledProjectCard>
                </Grid>
              ))}
              <Grid item xs={12} md={4}>
                <StyledButton
                  onClick={() => {
                    window.open("https://github.com/ph-bc?tab=repositories");
                  }}
                >
                  <Typography>Ver todos os projetos</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
}
