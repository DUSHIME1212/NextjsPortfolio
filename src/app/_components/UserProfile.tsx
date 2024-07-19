import React from 'react'
import Image from "next/image";
import Link from "next/link";

const UserProfile = () => {
    return (
        <div className={'min-h-96 w-full p-8'}>
            <div className={'size-full min-h-108 rounded-3xl bg-green-200 min-h-96 flex p-2 md:p-16 flex-col md:flex-row'}>
                <div className={'w-full text-center md:text-left md:w-1/2 overflow-hidden flex flex-col justify-center'}>
                    <span className={'text-5xl tracking-tighter'}>Hi, I'm DUSHIME Aime! 👋</span>
                    <div className={'text-lg p-2 mt-8 flex flex-col gap-2 tracking-tight'}>
                        <p>Digital designer living in Kigali, RWANDA.</p>
                        <p>I have 5+ years of experience in designing world-class websites and products.</p>
                        <p>If you have a project in mind, dont hesitate to reach out.</p>
                    </div>
                    <Link className={'p-4 w-full md:size-fit px-8 scale-75 md:scale-100 hover:scale-90 duration-700 bg-black text-white border-2 border-black rounded-full'} href={'/contact'}>Send me message</Link>
                </div>
                <div className={'w-full md:w-1/2 rounded-3xl relative overflow-clip'}>
                    <Image src={'/profile.jpg'} alt={''} className={'h-108 object-cover object-top'} width={612} height={312}/>
                </div>
            </div>
        </div>
    )
}
export default UserProfile
