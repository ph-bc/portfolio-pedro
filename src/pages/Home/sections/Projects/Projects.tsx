import StyledButton from "@components/StyledButton/StyledButton";
import StyledSection from "@components/StyledSection/StyledSection";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  styled,
  Typography,
} from "@mui/material";

export default function Projects() {
  const StyledProjectCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'left',
    padding: theme.spacing(2, 1),
    minHeight: '100%',
    backgroundColor: 'transparent',
    border: `solid 1px ${theme.palette.primary.contrastText}`,
  }));

  return (
    <StyledSection id="projects" darkBackground>
      <Container maxWidth="lg">
        <Grid container spacing={1} mt={3} mb={4}>
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
            <Grid container spacing={6}>
              {/*Cards*/}
              <Grid item xs={12} md={6}>
                <StyledProjectCard variant="outlined">
                  <CardContent>
                    <Typography
                      color="primary.contrastText"
                      variant="h5"
                      mb={-1}
                    >
                      Cine-Tag
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="subtitle1"
                      mb={1}
                    >
                      Maio de 2024
                    </Typography>
                    <img
                      src="https://media.discordapp.net/attachments/1233291960077254679/1258628780398743643/cine-tag-canvas.png?ex=6688bce5&is=66876b65&hm=de510e48e238e032b7317195b28175605f6432dcdb9bc3cc8a441c786a12bd28&=&format=webp&quality=lossless&width=1400&height=671"
                      alt="Foto do projeto Cine-Tag"
                      width="100%"
                    />
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      mb={3}
                    >
                      Cine-tag é uma aplicação web desenvolvida com React que
                      permite catalogar filmes e vídeos, além de favoritar seus
                      títulos preferidos para fácil acesso.
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      fontWeight="600"
                    >
                      Tecnologias: React, Javascript
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledButton
                      onClick={() => {
                        window.open(
                          "https://cine-tag-opal.vercel.app/",
                          "_blank"
                        );
                      }}
                    >
                      Ver projeto
                    </StyledButton>
                    <StyledButton
                      onClick={() => {
                        window.open(
                          "https://github.com/ph-bc/cine-tag",
                          "_blank"
                        );
                      }}
                    >
                      Ver código
                    </StyledButton>
                  </CardActions>
                </StyledProjectCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledProjectCard variant="outlined">
                  <CardContent>
                    <Typography
                      color="primary.contrastText"
                      variant="h5"
                      mb={-1}
                    >
                      SpaceApp
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="subtitle1"
                      mb={1}
                    >
                      Abril de 2024
                    </Typography>
                    <img
                      src="https://cdn.discordapp.com/attachments/1233291960077254679/1258619366598119465/space-app-canvas.png?ex=6688b421&is=668762a1&hm=b6e47ea345615a12a27ee875d55301a831576b007223c9297537c642fad35c1f&"
                      alt="Foto do projeto 1"
                      width="100%"
                    />
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      mb={3}
                    >
                      SpaceApp is a gallery app featuring space images,
                      including galaxies, stars, moons, and more. This project
                      is part of an educational course on React from Alura.
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      fontWeight="600"
                    >
                      Tecnologias: React, Javascript
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledButton
                      onClick={() => {
                        window.open(
                          "https://space-app-zeta.vercel.app/",
                          "_blank"
                        );
                      }}
                    >
                      Ver projeto
                    </StyledButton>
                    <StyledButton
                      onClick={() => {
                        window.open(
                          "https://github.com/ph-bc/gallery",
                          "_blank"
                        );
                      }}
                    >
                      Ver código
                    </StyledButton>
                  </CardActions>
                </StyledProjectCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledProjectCard variant="outlined">
                  <CardContent>
                    <Typography
                      color="primary.contrastText"
                      variant="h5"
                      mb={-1}
                    >
                      P-Blog
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="subtitle1"
                      mb={1}
                    >
                      Abril de 2024
                    </Typography>
                    <img
                      src="https://cdn.discordapp.com/attachments/1233291960077254679/1258537377702346832/p-blog-canvas.png?ex=668867c5&is=66871645&hm=a6d2f29ee6230238f1955ebbcdfc94c91c5921be30230084efe64f1c78a5e162&"
                      alt="Foto do projeto 1"
                      width="100%"
                    />
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      mb={3}
                    >
                      O P-Blog é um projeto React.js que funciona como um blog
                      pessoal. Inclui uma página inicial com cartões postais e
                      uma página “Sobre mim”, proporcionando uma interface
                      simples e intuitiva para gerenciar e exibir o conteúdo do
                      blog.
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      fontWeight="600"
                    >
                      Tecnologias: React, Javascript
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledButton
                      onClick={() => {
                        window.open("https://p-blog-two.vercel.app/", "_blank");
                      }}
                    >
                      Ver projeto
                    </StyledButton>
                    <StyledButton
                      onClick={() => {
                        window.open(
                          "https://github.com/ph-bc/p-blog",
                          "_blank"
                        );
                      }}
                    >
                      Ver código
                    </StyledButton>
                  </CardActions>
                </StyledProjectCard>
              </Grid>

              <Grid item xs={12} md={6}>
                <StyledProjectCard variant="outlined">
                  <CardContent>
                    <Typography
                      color="primary.contrastText"
                      variant="h5"
                      mb={-1}
                    >
                      Mata Mosquito
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="subtitle1"
                      mb={1}
                    >
                      Agosto de 2021
                    </Typography>
                    <img
                      src="https://cdn.discordapp.com/attachments/1233291960077254679/1258633048338202654/mata-mosquito-canvas.png?ex=6688c0de&is=66876f5e&hm=08f876942cb4cfe3b59647dfd80e592ed3d13ef25b593eb0cdf684555af494fb&"
                      alt="Foto do projeto Mata Mosquito"
                      width="100%"
                    />
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      mb={3}
                    >
                      Mata Mosquito é um jogo desenvolvido com HTML, CSS e
                      JavaScript onde o jogador tem 3 vidas para matar mosquitos
                      antes que o tempo acabe. Se falhar, perde uma vida. O jogo
                      oferece três níveis de dificuldade, aumentando o desafio
                      conforme o jogador avança.
                    </Typography>
                    <Typography
                      color="primary.contrastText"
                      variant="body1"
                      textAlign="justify"
                      fontWeight="600"
                    >
                      Tecnologias: HTML, CSS, JavaScript
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <StyledButton
                      onClick={() => {
                        window.open(
                          "https://pedro-matamosquito.netlify.app/",
                          "_blank"
                        );
                      }}
                    >
                      Ver projeto
                    </StyledButton>
                    <StyledButton
                      onClick={() => {
                        window.open(
                          "https://github.com/ph-bc/app-mata-mosquito",
                          "_blank"
                        );
                      }}
                    >
                      Ver código
                    </StyledButton>
                  </CardActions>
                </StyledProjectCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledSection>
  );
}
