import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const Error = () => {
  return (
    <div className="text-center">
      <div>
        <img
          className="mx-auto w-3/4 "
          src="https://i.ibb.co.com/4sn3SLW/404-error-with-landscape-concept-illustration-114360-7898.jpg"
          alt=""
        />
      </div>
      <div className="mx-auto w-3/5">
        <NavLink to="/">
          <button className="btn btn-secondary btn-outline">
            <FaArrowLeft className="text-xl font-bold"></FaArrowLeft>{" "}
            Please-Go-To-Home-Page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
