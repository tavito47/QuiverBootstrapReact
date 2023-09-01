import React from "react";
import "./footer.css";
import "./stylesgloba.css";
import pieLogo from "../assets/img/footer/logo.png";
import fb from "../assets/img/footer/facebook.png";
import ins from "../assets/img/footer/instagram.png";
import tw from "../assets/img/footer/twitter.png";
export default function footer() {
  return (
    <section className="footer">
      <footer className="contenedor-principal">
        <div className="row justify-content-center align-items-center">
          <div className="col izqfooter">
            <div className="loguitos">
              <img className="embers" src={pieLogo} alt="logo" />
            </div>
            <div className="anio">
              <samp>2017</samp>
            </div>
          </div>

          <div className="col derfooter">
            <div className="textofooter">
              <samp>Follow us @quiverfitness</samp>
            </div>
            <div className="iconos">
              <a className="icons" href="/#">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="/#">
                <img src={ins} alt="Instagram" />
              </a>
              <a href="/#">
                <img src={tw} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
