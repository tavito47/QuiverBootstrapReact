import React from "react";
import "./articulo.css";
import CardArticulo from "../cardArticulo/cardArticulo";

export default function articulo() {
  return (
    <div class=" container text-center">
      <div class=" cards row justify-content-center">
        <div class="col columnass">
          <CardArticulo />
        </div>
        <div class="col columnass">
          <CardArticulo />
        </div>
        <div class="col columnass">
          <CardArticulo />
        </div>
      </div>

    </div>
  );
}
