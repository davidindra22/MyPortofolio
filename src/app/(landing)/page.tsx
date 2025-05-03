import React from "react";
import Hero from "../component/Hero";
import Skill from "../component/Skill";
import Project from "./(project)/project";
import Footer from "../component/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden text-white px-3 md:px-32 pb-5">
      {/* Glow Bintik Blur */}
      {/* Red */}
      <div className="absolute top-[10%] left-[15%] w-[250px] h-[250px] bg-red-500 rounded-full opacity-60 blur-[160px] z-0" />
      <div className="absolute top-[60%] left-[5%] w-[200px] h-[200px] bg-red-400 rounded-full opacity-50 blur-[140px] z-0" />

      {/* Sky */}
      <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-sky-400 rounded-full opacity-70 blur-[180px] z-0" />
      <div className="absolute bottom-[5%] left-[40%] w-[150px] h-[150px] bg-sky-300 rounded-full opacity-70 blur-[140px] z-0" />

      {/* Green */}
      <div className="absolute bottom-[25%] right-[10%] w-[250px] h-[250px] bg-green-400 rounded-full opacity-70 blur-[160px] z-0" />
      <div className="absolute top-[50%] right-[30%] w-[180px] h-[180px] bg-green-300 rounded-full opacity-60 blur-[150px] z-0" />

      {/* Konten utama */}
      <div className="flex h-screen relative z-10">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <h3 className="text-6xl font-bold italic h-24 w-32 font-gradient font-playwrite-nigeria-modern transform translate-y-11">
            My
          </h3>
          <h2 className="text-[2.5rem] md:text-7xl font-medium uppercase font-poppins">
            portofolio
          </h2>
          <p className="text-sm font-medium font-poppins">
            by Davied Indra Rachman
          </p>
        </div>
      </div>

      <Hero />
      <Skill />
      <Project />
      <Footer />
    </main>
  );
}
