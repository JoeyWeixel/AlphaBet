import React from "react";
import { Link } from "react-router-dom";
import SignInButton from "@/components/accounts/SignInButton.tsx";
import SignOutButton from "@/components/accounts/SignOutButton.tsx";

const NavBar: React.FC = () => {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
    <Link to="#">
      <span>Home</span>
    </Link>
    <Link to={"/friends"}>
        <span>Friends</span>
    </Link>
    <SignInButton />
    <SignOutButton />
    </nav>
  );
};

export default NavBar;