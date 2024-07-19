import React from 'react'
import {tools, works} from "~/util/utils";
import Image from "next/image";
import Link from "next/link";

const WorkingSteps = () => {
    return (
        <div className={'min-h-96 my-20 w-full p-8'}>
            <div className={'size-full'}>
                <div className={'text-center grid gap-8 my-4 place-items-center'}>
                    <h3 className={'size-fit text-xl bg-green-100 px-4 rounded-full p-2'}>Ways of working 💡</h3>
                    <h1 className={'text-3xl'}>Skills that I use to create<br/> world-class products</h1>
                </div>
                <div className={'w-full flex gap-2 justify-evenly flex-wrap'}>
                    {
                        works.map((item, i) => (
                            <Link key={i}
                                  className={'w-full md:w-[48%] flex gap-4 hover:bg-green-50 duration-1000 rounded-3xl min-h-fit p-8'}
                                  href={''}>
                                <div className={'h-20 w-24 grid bg-green-100 rounded-3xl place-items-center'}>
                                    <Image src={item.logo} alt={''} className={'object-contain'} width={28}
                                           height={28}/>
                                </div>
                                <div className={'flex w-full flex-col gap-1 justify-start'}>
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
export default WorkingSteps
