import React from 'react'
import {testimonials} from "~/util/utils";
import Link from "next/link";

const Testimonials = () => {
    return (
        <div className={'min-h-96 my-10 w-full p-8'}>
            <div className={'size-full'}>
                <div className={'text-center grid gap-8 my-4 place-items-center'}>
                    <h3 className={'size-fit text-xl bg-green-100 px-4 rounded-full p-2'}>Testimonials 💡</h3>
                    <h1 className={'text-3xl'}>
                        Don&apos;t believe me - hear it <br/>
                        from the others
                    </h1>
                </div>
                <div className={'w-full flex gap-2 justify-evenly my-8 flex-wrap'}>
                    {
                        testimonials.map((item, i) => (
                            <Link key={i}
                                  className={'w-full md:w-[48%] group-hover:border border-black group flex gap-4 hover:bg-green-500 duration-1000 rounded-3xl min-h-fit p-8'}
                                  href={''}>
                                {/*<div className={'h-20 w-24 grid bg-pink-50 rounded-3xl place-items-center'}>*/}
                                {/*    <Image src={item.logo} alt={''} className={'object-contain'} width={28}*/}
                                {/*           height={28}/>*/}
                                {/*</div>*/}
                                <div className={'flex w-full gap-8 flex-col justify-start'}>
                                    <p className={'text-2xl duration-500 group-hover:text-white'}>{item.desc}</p>
                                    <span className={'opacity-80 duration-500 group-hover:text-white'}>{item.name}</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Testimonials
