import React from "react";
import Image from "next/image";
import { Project } from "../type/index";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-5 hover:scale-105 transition-transform duration-300 text-black dark:text-white z-10">
      <Image
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-md mb-4"
        width={500}
        height={500}
      />
      <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-row gap-3">
        <a
          href={`/detailProjects/${project.slug}`}
          className={`inline-block mt-3 text-sky-500 hover:underline`}
        >
          Deskripsi →
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sky-500 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}
