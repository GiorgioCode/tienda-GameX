import React from "react";
import { NavLink } from "react-router-dom";
import filtro from "./filter.svg";

const DropCategoria = () => {
    return (
        <div class="dropdown dropdown-end">
            <NavLink to={"/categoria/"}>
                <label className="btn btn-ghost modal-button btn-circle avatar text-white bg-slate-600 hover:bg-red-500 hover:text-black hover:shadow-lg hover:shadow-red-500">
                    <div className="w-9 rounded-full indicator ">
                        <img src={filtro} alt="avatar" />
                    </div>
                </label>
            </NavLink>
        </div>
    );
};

export default DropCategoria;
