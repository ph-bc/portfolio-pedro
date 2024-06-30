import NavBar from "@components/NavBar/NavBar";
import About from "./sections/AboutMe/AboutMe";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}
