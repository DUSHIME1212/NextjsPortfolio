"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Navs } from "~/util/utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
  const [open, Setopen] = useState(false);

  function handleOpen() {
    Setopen((prev) => !prev);
  }
  useGSAP(() => {
    gsap.from(".capitalize", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      filter: "blur(64px)",
      duration: 1,
    });
    gsap.from(".capitalize", {
      y: 0,
      opacity: 1,
    });
  });

  return (
    <header className={"px-4 md:px-16 lg:px-32"}>
      <nav className={"flex h-16 items-center justify-between"}>
        <Link href={"/"} className={"font-semibold tracking-tighter"}>
          Hosanna DUSH
        </Link>

        <div className="flex cursor-pointer xl:hidden" onClick={handleOpen}>
          {open ?  <X size={32} />: <List size={32} />}
        </div>
        {open && (
          <div className={`absolute left-0 top-16 text-center p-8 bg-white w-full items-center gap-16 flex flex-col`}>
            <div className={"flex w-full text-3xl flex-col gap-2"}>
              {Navs.map((item, i) => (
                <Link key={i} href={item.path} className={"capitalize"}>
                  {item.title}
                </Link>
              ))}
            </div>
            <Link
              href={"/contact"}
              className={
                " rounded-xl bg-black bg-opacity-60 p-3 w-full px-4 text-white duration-700 hover:scale-105 hover:bg-opacity-100 md:block"
              }
            >
              Contact me
            </Link>
          </div>
        )}
        <div className={"hidden items-center gap-16 xl:flex"}>
          <div className={"flex gap-2"}>
            {Navs.map((item, i) => (
              <Link key={i} href={item.path} className={"capitalize"}>
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            href={"/contact"}
            className={
              "hidden rounded-xl bg-black bg-opacity-60 p-3 px-4 text-white duration-700 hover:scale-105 hover:bg-opacity-100 md:block"
            }
          >
            Contact me
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
