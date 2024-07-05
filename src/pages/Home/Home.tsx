import StyledFooter from "@components/StyledFooter/StyledFooter";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import StyledNavBar from "@components/StyledNavBar/StyledNavBar";
import AboutMe from "./sections/AboutMe/AboutMe";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <StyledNavBar />
      {/* Sections */}
      <Hero />
      <AboutMe />
      <Projects />
      {/* Footer */}
      <StyledFooter />
    </>
  );
}
