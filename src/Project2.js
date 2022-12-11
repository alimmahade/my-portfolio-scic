import React from "react";
import ppd from "../src/Asset/p-2/2 (1).png";
import ppe from "../src/Asset/p-2/2 (2).png";
import ppf from "../src/Asset/p-2/2 (3).png";

const Project2 = () => {
  return (
    <div>
      <div>
        <div className="justify-center lg:flex  sm:grid-cols-1 md:grid-cols-1">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={ppd} alt="Shoes" className="rounded-xl" />
            </figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={ppe} alt="Shoes" className="rounded-xl" />
            </figure>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={ppf} alt="Shoes" className="rounded-xl" />
            </figure>
          </div>
        </div>
        <h1 className="text-4xl p-10">Project Details</h1>
        <p className="p-10">
          Projects Features: *Client can add any service *User can add service
          review *User can add service review *Users can register.
          <br /> Projects Livesite: https://as-ph-11.app/
          <br /> GitHub Link: https://github.com/alimmahade/service-review-site{" "}
          <br />
          GitHub Server Link: https://github.com/alimmahade/medi-guide-server
          <br /> Technology: React, MongoDB, Firebase, Express JS, Tailwind
        </p>
      </div>
    </div>
  );
};

export default Project2;
