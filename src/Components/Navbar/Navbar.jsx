import { NavLink } from "react-router-dom";
import { FcBusinessman } from "react-icons/fc";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="service">Service</NavLink>
      </li>
      <li>
        <NavLink to="cobtact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10   bg-opacity-30 bg-black text-red-500">
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
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src="https://i.ibb.co.com/TkFYwnY/logo-2.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-secondary">
            <FcBusinessman className="w-20 h-10"></FcBusinessman>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
