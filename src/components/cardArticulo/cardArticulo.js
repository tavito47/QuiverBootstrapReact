import React from "react";
import "./cardArticulo.css";

import img1 from "../../assets/img/section/section1.1.png";
export default function cardArticulo() {
  return (
    <div className="contenedor ">
      <div className="cuadrito">
        <div className="icono1">
          <img className="imagen" src={img1} alt="icono"/>
        </div>

        <div className="contenidos">
          <h5 className="tituloV">Dowload & Register</h5>

          <div className="separarV">
            <span className="parrafoV">
              Get the free iPhone app <br />
              and sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
