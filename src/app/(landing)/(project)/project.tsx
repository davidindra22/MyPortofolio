"use client";
import React from "react";
import ProjectCard from "@/app/component/ProjectCard";
import projects from "@/app/data/dataProjects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Project() {
  return (
    <div
      data-aos="fade-up"
      id="featuredprojects"
      className="flex flex-col items-center min-h-screen space-y-4 pb-10"
    >
      <h1 className="text-4xl font-bold font-gradient font-playwrite-nigeria-modern">
        Featured Projects
      </h1>
      <p className="text-center">
        Saya selalu bersemangat untuk mengembangkan keterampilan di bidang web
        development. Setiap proyek yang saya kerjakan adalah kesempatan untuk
        belajar dan terus berkembang, sehingga saya dapat memberikan hasil
        terbaik yang sesuai dengan kebutuhan pengguna dan organisasi
      </p>
      <div className="w-full px-4 md:px-12">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          draggable={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
