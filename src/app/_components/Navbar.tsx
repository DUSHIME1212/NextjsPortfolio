"use client"
import React from 'react'
import Link from "next/link";
import {Navs} from "~/util/utils";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const Navbar = () => {

    useGSAP(() => {
        gsap.from('.capitalize',{
            y:20,
            opacity:0,
            stagger:0.1,
            filter:"blur(64px)",
            duration:1,
        })
        gsap.from('.capitalize',{
            y:0,
            opacity:1,
        })
    })

    return (
        <header className={'px-8 md:px-16 lg:px-32'}>
            <nav className={' flex justify-between items-center h-16'}>
                <Link href={'/'} className={'tracking-tighter font-semibold'}>Hosanna DUSH</Link>
                <div className={'flex items-center gap-16'}>
                    <div className={'xl:flex gap-2 hidden'}>
                        {
                            Navs.map((item, i) => (
                                <Link key={i} href={item.path} className={'capitalize'}>{item.title}</Link>
                            ))
                        }
                    </div>
                    <Link href={'/contact'} className={'bg-black  bg-opacity-60 hover:bg-opacity-100 hover:scale-105 duration-700 p-3 rounded-xl px-4 text-white'}>Contact me</Link>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
