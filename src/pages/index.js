import Head from "next/head";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
