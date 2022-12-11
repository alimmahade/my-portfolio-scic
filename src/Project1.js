import React from "react";
import ppa from "../src/Asset/p-1/1 (1).png";
import ppb from "../src/Asset/p-1/1 (2).png";
import ppc from "../src/Asset/p-1/1 (3).png";

const Project1 = () => {
  return (
    <div>
      <div className="justify-center lg:flex  sm:grid-cols-1 md:grid-cols-1">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={ppa} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={ppb} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={ppc} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
      </div>
      <h1 className="text-4xl p-10">Project Details</h1>
      <p className="p-10">
        Project-3: Tutorial Sale website <br /> Projects Features: *Any tutorial
        can advertising *You can sell any tutorial *User can download web page
        by pdf file.
        <br /> Projects Livesite: https://context-pra-58.web.app/ <br />
        GitHub Link: https://github.com/alimmahade/online-university
        <br /> GitHub Link server:
        https://github.com/alimmahade/online-university-server
        <br />
        Technology: React, Firebase, API, Tailwind
      </p>
    </div>
  );
};

export default Project1;
