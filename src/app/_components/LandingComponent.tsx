"use client"
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import {Projects} from "~/util/utils";

const LandingComponent = () => {

    useGSAP(() =>{
        gsap.from('div',{
            opacity:0,
            y:50,
            stagger:0.01,
        })
        gsap.to('div',{
            y:0,
            opacity:1,
            duration:2,
            stagger:0.4,
            ease: "power2.inOut",
        })
    })

    const profile= '/profile.jpg'

    return (
        <div
            className={'size-full min-h-96 bg-blue-100 pb-20 mt-20 md:rounded-t-[118px] flex flex-col justify-center items-center p-2 md:px-16 xl:px-32 text-7xl'}>
            <div className={'flex flex-col items-center my-20 gap-8'}>
                <div className={'h-96 md:rounded-[118px] overflow-clip'}>
                    <Image src={profile} alt={''} width={578} height={200}/>
                </div>
                <h1 className={'text-3xl text-center'}>Hi I&apos;m Dushime Aime 👋</h1>
                <p className={'text-center text-2xl md:text-7xl tracking-tighter'}>I design apps, and websites that blows your mind</p>
                <div className={'text-lg flex flex-col md:flex-row justify-center items-center md:gap-2'}>
                    <button className={'p-4 w-full md:size-fit px-8 scale-75 md:scale-100 hover:scale-90 duration-700 border-2 border-black rounded-full'}>About
                        me
                    </button>
                    <button
                        className={'p-4 w-full md:size-fit px-8 scale-75 md:scale-100 hover:scale-90 duration-700 bg-black text-white border-2 border-black rounded-full'}>Contact
                        me
                    </button>
                </div>
            </div>
            <div className={'w-full mt-36 min-h-96'} id={'works'}>
                {Projects.slice(0,3).map((item, i) => (
                    <Link href={item.link} key={i} className={`bg-white ${item.bg} sticky top-24 min-h-96 rounded-[48px] flex flex-col md:flex-row items-center py-16 md:py-32 gap-8 px-4 md:px-16 justify-center size-full`}>
                        <div className='w-full md:w-1/2 flex text-center md:text-left flex-col gap-4'>
                            <h4 className='text-4xl tracking-tight'>{item.title}</h4>
                            <h1 className='text-2xl opacity-20 tracking-tighter'>{item.desc}</h1>
                        </div>
                        <div className='md:w-1/2 w-full min-h-96 flex relative rounded-xl overflow-clip justify-center'>
                            <Image src={item.img} className='object-cover' alt='' fill />
                        </div>
                    </Link>
                ))}
            </div>
            <Link href={'/projects'} className='w-full mt-4 rounded-3xl p-4 text-blue-600 hover:bg-blue-500 duration-700 hover:text-white text-2xl text-center border border-black'>More Projects</Link>
        </div>
    )
}
export default LandingComponent
