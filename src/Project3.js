import React from "react";
import ppg from "../src/Asset/p-3/3 (1).png";
import pph from "../src/Asset/p-3/3 (2).png";
import ppi from "../src/Asset/p-3/3 (3).png";

const Project3 = () => {
  return (
    <div>
      <div>
        <div>
          <div className="justify-center lg:flex  sm:grid-cols-1 md:grid-cols-1">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={ppg} alt="Shoes" className="rounded-xl" />
              </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={pph} alt="Shoes" className="rounded-xl" />
              </figure>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={ppi} alt="Shoes" className="rounded-xl" />
              </figure>
            </div>
          </div>
          <h1 className="text-4xl p-10">Project Details</h1>
          <p className="p-10">
            Projects Features: *Users can register themselves as seller or buyer
            *User add products and buy products *User product sell and give
            review *Responsive All devices.
            <br /> Projects Livesite: https://as-12-ph.app/
            <br /> GitHub Link: https://github.com/alimmahade/car-resel-site
            <br /> GitHub Server Link:
            https://github.com/alimmahade/car-bari-server
            <br /> Technology: React, MongoDB, Firebase, Express JS, Tailwind,
            DaisyUI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project3;
