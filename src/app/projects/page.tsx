import React from "react";
import Footer from "../_components/Footer";
import { Projects } from "~/util/utils";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      <div className="flex min-h-screen flex-col items-center justify-start gap-4">
        <div
          className={"mt-36 flex min-h-96 w-full flex-col gap-4"}
          id={"works"}
        >
            <h1 className="text-5xl mb-12 tracking-tight text-black">Recent Projects</h1>
          {Projects.map((item, i) => (
            <div
              key={i}
              className={`bg-white ${item.bg} flex size-full min-h-96 flex-col items-center justify-center gap-8 rounded-[48px] px-4 py-16 border border-black shadow-md md:flex-row md:px-16 md:py-32`}
            >
              <div className="flex w-full md:w-1/2 items-center md:items-start flex-col gap-4 text-center md:text-left">
                <h4 className="text-4xl tracking-tight">{item.title}</h4>
                <h1 className="text-2xl tracking-tighter opacity-60">
                  {item.desc}
                </h1>
                <div className="flex flex-row gap-4">
                  <Link href={item.link} className="p-2 text-white rounded-xl px-4 hover:bg-blue-600/20 hover:text-blue-600 duration-700 bg-blue-600">View project</Link>
                  {item.prototype && <Link href={item.link} className="p-2 rounded-xl px-4 hover:bg-blue-600/20 text-blue-600 duration-700 border border-blue-600">Prototype</Link>}
                </div>
              </div>
              <div className="relative flex min-h-96 w-full justify-center overflow-clip rounded-xl md:w-1/2">
                <Image src={item.img} className="object-cover" alt="" fill />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id={"footer"} className={"w-full mt-8"}>
        <Footer />
      </div>
    </div>
  );
};

export default page;
