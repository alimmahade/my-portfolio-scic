import React from "react";
import Project from "./Project";
import mehedi from "../src/Asset/img/meh.jpg";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={mehedi} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-4xl text-left">Mehedi Hassan</h1>
            <p className="py-6 text-left">
              I developed several web applications for a project management
              software client. I was involved in the design and development
              process for all applications and I managed enhancement requests
              after each rollout. I have also been extensively involved in many
              developer communities.
            </p>
            <div className="card-actions justify-start">
              <a
                href="https://drive.google.com/file/d/1coU-IdZiqs91Fu32SSLhPFk4hUxl69fn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Project></Project>
    </div>
  );
};

export default Home;
