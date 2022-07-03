import React from "react";
import { NavLink } from "react-router-dom";

const DropCategoria = () => {
  return (
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn m-1">
        Categoria
      </label>
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <NavLink to={"/categoria/fps"}>FPS</NavLink>
          <NavLink to={"/categoria/aventura"}>Aventura</NavLink>
          <NavLink to={"/categoria/simulacion"}>Simulacion</NavLink>
          <NavLink to={"/categoria/battle_royale"}>Battle Royale</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DropCategoria;
