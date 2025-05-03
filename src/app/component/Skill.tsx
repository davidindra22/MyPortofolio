import Image from "next/image";
import React from "react";

export default function Skill() {
  return (
    <div id="Skilltools" className="min-h-screen  space-y-4">
      <p className="text-4xl font-bold font-gradient font-playwrite-nigeria-modern">
        Skill and Tools
      </p>
      <p>Skill and Tools that i can use</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 ">
        <div className="flex flex-col">
          <h1 className="text-2xl">Soft Sklill</h1>
          <p>
            Problem Sloving | Team Work | Excellent Communication | Fast Learner
            | Adaptable
          </p>
          <h1 className="text-2xl pt-4">Hard Sklill</h1>
          <p>
            HTML | Java Script| React | Next Js | Tailwind Css | MySQL | Figma |
            GIT
          </p>
        </div>
        <div>
          <div className="text-2xl">Tools :</div>
          <div className="image-container grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 items-center justify-items-start">
            <div>
              <Image
                // className="custom-image "
                src="/assets/html-5.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <Image
                src="/assets/javascript.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div>
              <Image src="/assets/react.png" alt="" width={50} height={50} />
            </div>
            <div>
              <Image src="/assets/next-js.png" alt="" width={50} height={50} />
            </div>
            <div>
              <Image src="/assets/tailwind.png" alt="" width={50} height={50} />
            </div>
            <div>
              <Image src="/assets/mysql.png" alt="" width={50} height={50} />
            </div>
            <div>
              <Image src="/assets/figma.png" alt="" width={50} height={50} />
            </div>
            <div>
              <Image src="/assets/git.png" alt="" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
