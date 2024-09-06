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
            className={'size-full min-h-96 bg-green-50 pb-20 mt-20 md:rounded-t-[118px] flex flex-col justify-center items-center p-2 md:px-16 xl:px-32 text-7xl'}>
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
                {Projects.map((item, i) => (
                    <div key={i} className={`bg-white ${item.bg} sticky top-24 min-h-96 rounded-[48px] flex flex-col md:flex-row items-center py-16 md:py-32 gap-8 p-2 md:p-16 justify-center size-full`}>
                        <div className='w-1/2 flex text-center md:text-left w-full flex-col gap-4'>
                            <h4 className='text-4xl tracking-tight'>{item.title}</h4>
                            <h1 className='text-2xl tracking-tighter'>{item.desc}</h1>
                        </div>
                        <div className='size-1/2 flex relative justify-center'>
                            <Image src={item.img} className='object-contain' alt='' height={278} width={148} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default LandingComponent
