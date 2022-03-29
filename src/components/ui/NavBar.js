import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

const NavBar = () => {

  const { user, dispatch } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogout = () => {

    dispatch({
      type: types.logout,
      payload: {
        name: '',
        logged: false,
      }
    })

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand ms-5" to="/">
        ReactApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item nav-link active" : "nav-item nav-link"
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">
            {user.name}
          </span>
          <button
            className={"nav-item nav-link btn me-5"}
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
