import React from 'react'
import {CaseStudies, channels, Navs} from "~/util/utils";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={'w-full'}>
            <div className={'flex flex-col md:flex-row'}>
                {/*left*/}
                <div className={'w-full md:w-1/2'}>
                    <div>
                        <h1>Follow me on other channels</h1>
                        <div>
                            {
                                channels.map((item, i) => (
                                    <a href={item.link} key={i} className={`xl:w-1/3 w-full p-4 group flex justify-between rounded-xl bg-pink-50`}>
                                        <div className={'flex group-hover:scale-90 duration-700 items-center gap-4'}>
                                            <Image src={item.logo? item.logo: '/img.png'} alt={''} width={18} height={18}/>
                                            <h1>{item?.title}</h1>
                                        </div>
                                        <Image src={'/arrow-right.png'} className={'object-contain duration-700 group-hover:-rotate-45'} alt={''} width={18} height={18}/>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/*right*/}
                <div className={'md:w-1/2 w-full flex flex-wrap flex-row gap-2 '}>
                    <div className={'xl:w-1/2 w-full p-4'}>
                        <h1 className={'text-3xl'}>Navigation</h1>
                        <div className={'flex gap-2 p-2 flex-col'}>
                            {Navs.map((item,i) => (
                                <Link href={''} className={'capitalize'} key={i}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={'xl:w-1/2 w-full p-4'}>
                        <h1 className={'text-3xl'}>Case studies</h1>
                        <ul className={'gap-2 mt-4 flex flex-col'}>
                            {
                                CaseStudies.map((item,i) => (
                                    <Link href={''}>{item.title}</Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className={'flex py-6 flex-wrap gap-4 justify-between'}>
                <p>© 2024 – Hosanna DUSHIME <Link href={'https://www.instagram.com/@djmatt_360'}>@djmatt_360</Link> </p>
                <span>
                    <ul className={'flex gap-4'}>
                        <li>Privacy Policy</li>
                        <li>Cookies</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}
export default Footer
