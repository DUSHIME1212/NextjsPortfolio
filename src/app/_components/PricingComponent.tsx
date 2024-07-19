import React from 'react'
import {pricing, testimonials} from "~/util/utils";
import Link from "next/link";

const PricingComponent = () => {
    return (
        <div className={'min-h-72 py-8 flex flex-col'}>
            <div className={'size-full'}>
                <div className={'text-center grid gap-8 my-4 place-items-center'}>
                    <h3 className={'size-fit text-xl bg-green-100 px-4 rounded-full p-2'}>Pricing 💰</h3>
                    <h1 className={'text-3xl'}>
                        Here are my most common expertises - contact me <br/>
                        to build something great
                    </h1>
                </div>
                <div className={'w-full h-fit gap-4 p-2 flex justify-evenly my-8 flex-wrap'}>
                    {
                        pricing.map((item, i) => (
                            <Link key={i}
                                  className={'w-full md:w-[30%] border-2 border-black group flex flex-col gap-4 hover:bg-green-500 duration-1000 rounded-3xl min-h-fit p-8'}
                                  href={''}>
                                <div>
                                    <div>
                                        <p className={'text-2xl duration-500 h-20 group-hover:text-white'}>{item.title}</p>
                                    </div>
                                </div>
                                <div className={'bg-black h-[1px]'}/>
                                <div className={'flex flex-col gap-2 text-black duration-700 group-hover:text-white'}>
                                    {
                                        item.services.map((serv, i) => (
                                            <div key={i} className={'m-2'}>
                                                <h1 className={'mb-2'}>{serv}</h1>
                                                <div className={'bg-black group-hover:bg-white h-[1px]'}/>
                                            </div>
                                        ))
                                    }
                                </div>
                                <button className={'w-full p-2 bg-black bg-opacity-60 hover:bg-opacity-100 duration-1000 text-white rounded-xl'}>{item.contact}</button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default PricingComponent
