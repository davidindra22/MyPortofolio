import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Hero() {
  return (
    <div id="aboutMe" className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-screen">
      <div className="flex flex-col space-y-4">
        <p className="text-4xl font-bold font-gradient font-playwrite-nigeria-modern">
          About Me
        </p>
        <p>Hi! I&apos;m Davied Indra Rachman</p>
        <p>
          Saya adalah mahasiswa semester 8 yang sedang menempuh pendidikan
          Sarjana Sistem Informasi dengan minat dalam web development. Memiliki
          keinginan kuat untuk mengembangkan keterampilan dan menambah
          pengalaman di bidang tersebut. Mampu berkomunikasi dengan baik serta
          bekerja dalam tim maupun secara mandiri untuk mencapai tujuan
          organisasi. Dengan semangat belajar yang tinggi, saya selalu berupaya
          menemukan solusi inovatif dalam pengembangan teknologi informasi.
        </p>
        <p>
          Dengan keahlian yang saya miliki, saya berusaha semaksimal mungkin
          untuk memberikan hasil terbaik dalam setiap proyek yang saya kerjakan
        </p>
        <div className="w-full grid grid-cols-2 gap-1 md:gap-3">
          <div>
            <Link href="https://www.instagram.com/dav22___" target="_blank">
              <FaInstagram size={25} />
              <p>Dav22__</p>
            </Link>
          </div>
          <div>
            <Link href="https://github.com/davidindra22" target="_blank">
              <FaGithubSquare size={25} />
              <p>@davidindra22</p>
            </Link>
          </div>
          <div>
            <Link
              href="https://linkedin.com/in/davied-indra-54837b297"
              target="_blank"
            >
              <FaLinkedin size={25} />
              <p>DaviedIndra</p>
            </Link>
          </div>
          <div className="w-full">
            <MdOutlineMail size={25} />
            <p className="text-wrap break-words w-ful">
              daviedindra20@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-0 md:pt-10 mb-20 md:mb-0">
        <div className="bg-[url(/assets/profil.jpg)] bg-cover rounded-full shadow-[0px_0px_43px_5px_#0091ff] hover:scale-105 transition-transform-shadow duration-300 hover:shadow-cyan-500 h-50 w-50 md:h-80 md:w-80 z-10"></div>
      </div>
    </div>
  );
}
