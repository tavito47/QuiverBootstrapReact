import React from "react";
import "./about.css";
import "../stylesgloba.css";
export default function about() {
  return (
    <section className="contendor-about ">
      <div className=" container">
        <div className="row">
          <div className="col-md-6">
            <div className="tituloAbout">
              <h2 className="titA">About</h2>
            </div>
            <div className="parrafoAbout">
              <p class="parIzq">
                Founded in 2017, Quiver Fitness helps everyone from the
                occasional gym-goer to the fitness enthusiast train better and
                more efficiently. Frustrated by subscription sites with bland
                content, super expensive personal trainers, and the abundance of
                ineffective free videos online, we created the first
                peer-to-peer searchable fitness platform that features
                instructional content from Trainers around the world. We make it
                simple for Members to browse, discover, pay, and start working
                out.
              </p>
            </div>
          </div>

          <div class="col-md-6 fondoIzq">
            <div className="tituloMembers">
              <h2 className="titM">Members</h2>
            </div>
            <div className="parrafoMembers">
              <p class="parDer">
                Our catalog of high-quality instructional fitness videos is for
                everyone from the fitness novice to the experienced athlete. We
                work with the best Personal Trainers around the world to ensure
                that each video yields results. Whether you want to target a
                specific muscle group or are in need of a combination circuit,
                Quiver Fitness makes it easy to find what you’re looking for.
              </p>
            </div>
          </div>

          <div className="background-image"></div>
        </div>
      </div>
    </section>
  );
}
