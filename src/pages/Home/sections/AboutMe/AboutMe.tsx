import { Container, Divider, Grid, Typography, styled } from "@mui/material";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import StyledCard from "@components/StyledCard/StyledCard";

export default function About() {
  const StyledSection = styled("section")(({ theme }) => ({
    marginTop: "24px",
    marginBottom: "24px",
    backgroundColor: theme.palette.primary.contrastText,
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
        <Grid container spacing={1} justifyContent="center">
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
                  <WorkspacePremiumIcon />
                  <Typography color="primary" variant="body1" fontWeight="bold">
                    Experiência
                  </Typography>
                  <Typography color="primary" variant="body2">
                    2+ anos
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Assistente de T.I.
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={3}>
                <StyledCard variant="outlined">
                  <SchoolIcon />
                  <Typography color="primary" variant="body1" fontWeight="bold">
                    Educação
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Cursando Bacharelado em
                  </Typography>
                  <Typography color="primary" variant="body2">
                    Ciência da Computação
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  color="primary"
                  variant="body1"
                  textAlign="justify"
                  mt={5}
                >
                  Olá, meu nome é Pedro, tenho 25 anos e estou prestes a me
                  formar em Ciência da Computação. Durante minha jornada
                  acadêmica, desenvolvi habilidades em programação,
                  especialmente em JavaScript, HTML e CSS. Embora não tenha
                  trabalhado diretamente como desenvolvedor, adquiri experiência
                  relevante como Assistente de T.I. em uma farmácia de
                  manipulação. Nesse papel, realizei tarefas que incluíam
                  suporte técnico, programação básica e desenvolvimento web
                  básico. <br /> <br />
                  Além das competências técnicas, possuo habilidades em design
                  gráfico e marketing digital. Tenho um sólido entendimento de
                  desenvolvimento web front-end, além de conhecimentos em
                  back-end, o que me permite ter uma visão abrangente dos
                  projetos em que trabalho. Estou buscando uma oportunidade para
                  aplicar meus conhecimentos, continuar aprendendo e crescer
                  profissionalmente na área de T.I.
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
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    React
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    Typescript
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    Javascript
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    HTML
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    CSS
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    Laravel
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    PHP
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    Java
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    C#
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    Python
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    Node.js
                  </Typography>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <Typography color="primary" variant="body1">
                    MySQL
                  </Typography>
                </StyledCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
}
