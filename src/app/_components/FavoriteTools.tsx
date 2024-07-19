import React from 'react'
import {tools} from "~/util/utils";
import Link from "next/link";
import Image from "next/image";

const FavoriteTools = () => {
    return (
        <div className={'min-h-96 my-20 w-full p-8'}>
            <div className={'size-full'}>
                <div className={'text-center grid gap-8 my-4 place-items-center'}>
                    <h3 className={'size-fit text-xl bg-green-100 px-4 rounded-full p-2'}>My favorite tools 🛠️</h3>
                    <h1 className={'text-3xl'}>These are the tools I use everyday</h1>
                </div>
                <div className={'w-full flex flex-wrap'}>
                    {
                        tools.map((item,i) => (
                            <Link key={i} className={'w-full xl:w-1/3 flex gap-4 hover:bg-green-100 duration-1000 rounded-3xl min-h-32 p-8'} href={''}>
                                <div className={'size-20 grid bg-green-50 rounded-3xl place-items-center'}>
                                    <Image src={item.logo} alt={''} className={'object-contain'} width={28} height={28}/>
                                </div>
                                <div className={'flex flex-col gap-1 justify-center'}>
                                    <span className={'text-2xl'}>{item.name}</span>
                                    <p className={'opacity-60'}>{item.usedfor}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default FavoriteTools
