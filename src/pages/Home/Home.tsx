import StyledFooter from "@components/StyledFooter/StyledFooter";
import About from "./sections/AboutMe/AboutMe";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import StyledNavBar from "@components/StyledNavBar/StyledNavBar";

export default function Home() {
  return (
    <>
      <StyledNavBar />
      <Hero />
      <About />
      <Projects />
      <StyledFooter />
    </>
  );
}
