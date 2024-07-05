import {
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";

import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import StyledCard from "@components/StyledCard/StyledCard";
import StyledSection from "@components/StyledSection/StyledSection";

export default function About() {
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
        <Grid container mt={4} mb={6}>
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
            <Grid container spacing={4}>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      React
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Typescript
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Javascript
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      HTML
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      CSS
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Laravel
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      PHP
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Java
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      C#
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Python
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      Node.js
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
              <Grid item xs={6} md={2}>
                <StyledCard variant="outlined">
                  <CardContent>
                    <Typography color="primary" variant="body1">
                      MySQL
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
