import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/custom/ModeToggle";

const Header = () => {
  return (
    <div className="flex border shadow-lg gap-5 p-5 items-center justify-center">
      <Link href="/">Home</Link>
      <Link href="/">Projects</Link>
      <Link href="/">Experience</Link>
      <Link href="/">Contact</Link>
      <div className=" position right">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
