import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function footer() {
  return (
    <footer>
      <div className="grid grid-cols-1  md:grid-cols-2">
        <div className="pb-5">
          <h1 className="text-4xl font-bold font-gradient font-playwrite-nigeria-modern">
            Let&apos;s work
          </h1>
          <h1 className="text-4xl font-bold font-gradient font-playwrite-nigeria-modern">
            together today!
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold">Sitemap</h5>
            <a href="#top" className="sitemap">
              Home
            </a>
            <a href="#aboutMe" className="sitemap">
              About Me
            </a>
            <a href="#Skilltools" className="sitemap">
              Skill And Tools
            </a>
            <a href="#featuredprojects" className="sitemap">
              Featured Projects
            </a>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-semibold">Socials</h5>
            <div>
              <Link
                href="https://www.instagram.com/dav22___"
                target="_blank"
                className="sosials"
              >
                <FaInstagram size={25} />
                <p>Dav22__</p>
              </Link>
            </div>
            <div>
              <Link
                href="https://github.com/davidindra22"
                target="_blank"
                className="sosials"
              >
                <FaGithubSquare size={25} />
                <p>@davidindra22</p>
              </Link>
            </div>
            <div>
              <Link
                href="https://linkedin.com/in/davied-indra-54837b297"
                target="_blank"
                className="sosials"
              >
                <FaLinkedin size={25} />
                <p>DaviedIndra</p>
              </Link>
            </div>
            <div className="sosials">
              <MdOutlineMail size={25} />
              <p className="text-wrap break-words w-ful">
                daviedindra20@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
