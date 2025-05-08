"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Project } from "@/app/type";
import { FaCode, FaRegStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import {
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaAngular,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiVite, SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const iconMap = {
  Bootstrap: <FaBootstrap className="text-purple-600" />,
  ReactJS: <FaReact className="text-sky-500" />,
  NextJS: <SiNextdotjs className="text-black" />,
  NodeJS: <FaNodeJs className="text-green-600" />,
  JavaScript: <FaJsSquare className="text-yellow-400" />,
  HTML5: <FaHtml5 className="text-orange-500" />,
  PHP: <FaPhp className="text-indigo-500" />,
  Vite: <SiVite className="text-pink-500" />,
  Angular: <FaAngular className="text-red-500" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  Git: <FaGitAlt className="text-orange-600" />,
  MySQL: <FaDatabase className="text-blue-600" />,
  TailwindCSS: <SiTailwindcss className="text-sky-500" />,
};

export default function DetailProjectClient({ project }: { project: Project }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-hidden text-white px-2 md:px-10 pt-10">
      {/* Red */}
      <div className="absolute top-[10%] left-[15%] w-[250px] h-[250px] bg-red-500 rounded-full opacity-50 blur-[160px] z-0" />
      <div className="absolute top-[60%] left-[5%] w-[200px] h-[200px] bg-red-400 rounded-full opacity-40 blur-[140px] z-0" />
      {/* Sky */}
      <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-sky-400 rounded-full opacity-60 blur-[180px] z-0" />
      <div className="absolute bottom-[5%] left-[40%] w-[150px] h-[150px] bg-sky-300 rounded-full opacity-60 blur-[140px] z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-6 min-h-screen">
        {/* Deskripsi Project */}
        <div className="flex flex-col space-y-4" data-aos="fade-up">
          <p className="text-4xl font-bold font-gradient font-playwrite-nigeria-modern">
            {project.title}
          </p>
          <p>{project.description}</p>

          <div className="flex flex-row gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-gradient-to-r from-sky-600 to-teal-500 transition-all text-white font-bold py-2 px-4 rounded-full"
              >
                Live Website
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-gradient-to-r from-sky-600 to-teal-500 transition-all text-white font-bold py-2 px-4 rounded-full"
              >
                GitHub
              </a>
            )}
          </div>
          <br />
          {/* teknologi */}
          <div className="flex flex-row items-center gap-2">
            <FaCode size={24} color="oklch(82.8% 0.111 230.318)" />
            <p className="text-2xl font-semibold">Technologi Used</p>
          </div>
          {project.technologies && (
            <div className="flex flex-wrap gap-2 pt-4">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-row items-center gap-2 bg-gradient-to-r from-blue-500/50 to-blue-400/50 rounded-full px-4 py-2"
                >
                  {iconMap[tech as keyof typeof iconMap] || null}
                  
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* fitur */}
        <div
          className="flex justify-center pt-0 md:pt-10 mb-20 md:mb-0"
          data-aos="fade-left"
        >
          <div className="flex flex-col gap-4 bg-white/5 w-full p-3 md:p-8 z-0">
            <Image
              className="w-120 md:w-full object-cover rounded-md mb-4"
              src={project.image || "/assets/bg-web-wisata.png"}
              alt={project.title}
              width={500}
              height={500}
            />

            <div className="flex flex-col *:pb-5">
              <div className="flex flex-row items-center font-bold">
                <FaRegStar size={20} color="yellow" />
                <p className="pl-2">Key Features</p>
              </div>

              {project.features?.map((feature, index) => (
                <div key={index} className="flex flex-row">
                  <GoDotFill size={20} color="oklch(74.6% 0.16 232.661)" />
                  <p className="pl-2">
                    <strong>{feature.bold}</strong> – {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
