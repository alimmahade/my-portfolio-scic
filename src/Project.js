import React from "react";
import { Link } from "react-router-dom";
import pic from "../src/Asset/img/pic-1.jpg";
import picb from "../src/Asset/img/pic-2.jpg";
import picc from "../src/Asset/img/pic-3.jpg";

const Project = () => {
  return (
    <div>
      <h1 className="text-4xl p-10">My Projects</h1>
      <div className="justify-center lg:flex  sm:grid-cols-1 md:grid-cols-1">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={pic} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Project 1</h2>
            <p>Tutorial Sale website</p>
            <div className="card-actions">
              <a
                href="https://context-pra-58.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Site</button>
              </a>
              <Link to="/project1">
                <button className="btn btn-primary">Project Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={picc} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Project 2</h2>
            <p>Product buy and sell/E-commerce website</p>
            <div className="card-actions">
              <a href="https://as-12-ph.web.app/">
                <button className="btn btn-primary">Live Site</button>
              </a>
              <Link to="/project2">
                <button className="btn btn-primary">Project Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={picb} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Project 3</h2>
            <p>Service provider website</p>
            <div className="card-actions">
              <a
                href="https://as-ph-11.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live Site</button>
              </a>
              <Link to="/project3">
                <button className="btn btn-primary">Project Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
