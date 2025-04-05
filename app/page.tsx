// import Image from "next/image";

import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
    </>
  );
}
