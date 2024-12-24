import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";

const Navber = () => {
  const location = useLocation();

  const isviolet = location.pathname === "/"
  const bgcolorclass = isviolet? "bg-[#9538E2] text-[#ffff]": "bg-white text-black"
  return (
    <div className={`${bgcolorclass} mt-2 rounded-t-2xl max-w-7xl mx-auto`}>
      <div className=" navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold text-xl ${isActive ? 'underline ' : 'hover:text-warning'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `font-bold text-xl ${isActive ? 'underline ' : 'hover:text-warning'}`
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `font-bold text-xl ${isActive ? 'underline ' : 'hover:text-warning'}`
                }
              >
                Dashboard
              </NavLink>
              
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
          <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-bold text-xl ${isActive ? 'underline' : 'hover:text-warning'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `font-bold text-xl ${isActive ? 'underline ' : 'hover:text-warning'}`
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `font-bold text-xl ${isActive ? 'underline' : 'hover:text-warning'}`
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  `font-bold text-xl ${isActive ? 'underline' : 'hover:text-warning'}`
                }
              >
                Feedback
              </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link to="/dashboard" className="btn text-2xl rounded-full"><AiOutlineShoppingCart /></Link>
          <Link to="/dashboard/wishlist" className="btn text-2xl rounded-full"><FaRegHeart /></Link>
        </div>
      </div>
    </div>
  );
};

export default Navber;
