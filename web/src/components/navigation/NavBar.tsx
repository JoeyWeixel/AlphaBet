import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-start sticky z-[100] top-0 w-screen gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link to="#">
        <div>Home</div>
      </Link>
    </nav>
  );
};

export default NavBar;