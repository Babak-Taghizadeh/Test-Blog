"use client";

import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { MdOutlineExitToApp, MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { ROUTES } from "../../lib/constants";

const Header = ({ backButton }: { backButton?: boolean }) => {
  const [scrollY, setScrollY] = useState<boolean>(false);

  const handleScrollY = () =>
    window.scrollY > 0 ? setScrollY(true) : setScrollY(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  return (
    <header
      className={`h-20 w-full flex border-b border-black justify-between items-center fixed top-0 left-0 px-8 rounded-b-lg lg:px-[26rem] transition-transform duration-500 ease-in-out ${
        scrollY ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <h1 className="text-xl font-bold">وبلاگ تخصصی ماشین آلات</h1>
      {backButton && (
        <Link
          href={ROUTES.BLOGS}
          className="absolute right-10 bg-slate-900 text-primary flex items-center gap-2 p-2 border rounded-xl"
        >
          <MdArrowForwardIos size={25} />
          <span>بلاگ ها</span>
        </Link>
      )}
      <Button
        className="flex items-center justify-center gap-2 text-sm w-fit p-2 text-center"
        as="button"
      >
        <MdOutlineExitToApp size={22} />
        <span>خروج</span>
      </Button>
    </header>
  );
};

export default React.memo(Header);
