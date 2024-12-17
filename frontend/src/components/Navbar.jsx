import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div>
      <div className="bg-white shadow-sm">
        <div className="mx-auto px-4 py-2 flex justify-between items-center">
          <Link to="/" className="flex items-center mr-5">
            <img
              src="https://thumbs.dreamstime.com/b/inspire-colored-rainbow-word-text-suitable-logo-design-card-brochure-typography-127992668.jpg"
              alt=""
              className="h-12 md:mr-2"
            />
          </Link>

          <div className="flex items-center space-x-4 w-[200px]">
            <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
              Home
            </Link>
            <Link to="/create" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
              Create
            </Link>
            <Link
              to="/account"
              className="w-8 h-8 rounded-full bg-stone-400 flex items-center justify-center text-xl text-gray capitalize"
            >
              {user.name.slice(0, 1)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
