'use client'
import React, { useState,FormEvent } from 'react';
import emailjs from 'emailjs-com';
import Footer from "~/app/_components/Footer";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

const Page = () => {

    useGSAP(() => {
        gsap.from('h1',{
            y:70,
            opacity:0,
            stagger:0.2,
            filter:'blur(56px)',
            delay:0.5,
        })
        gsap.to('h1',{
            y:0,
            opacity:1,
        })
    })

    const [name1, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const sendEmail = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSuccess("");
        setError("");

        if (!email && message === '') {
            setError("Please enter your email");
            return;
        }
        if (!message && message === '') {
            setError("Please enter your message");
            return;
        }

        const templateParams = {
            from_name: email,
            to_name: "Hosanna DUSHIME",
            message,
        };

        setIsLoading(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        ).then((response) => {
            setIsLoading(false);
            setSuccess("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
            console.log(response);
            
        }, (err) => {
            setIsLoading(false);
            setError("Failed to send message, please try again later.");
            console.error(err);
        });
    };


    return (
        <div className={'min-h-screen flex flex-col gap-4 pt-32 w-full'}>
            <div className={'flex gap-8 flex-col'}>
                <h1 className={'text-3xl'}>SEND ME A MESSAGE</h1>
                <h1 className={'text-7xl'}>Send me a message and I&apos;ll get back to you in next 48 hours</h1>
            </div>
            <div className={'size-full my-8 bg-green-200 p-8 rounded-xl px-8'}>
                <form onSubmit={sendEmail} action="" className={'flex flex-col my-8 gap-4'}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name1}
                        onChange={(e) => setName(e.target.value)}
                        className={'bg-white outline-none p-4 rounded-xl w-full'} placeholder={'Name'}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={'bg-white outline-none p-4 rounded-xl w-full'}
                        placeholder={'Email'}/>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className={'bg-white outline-none p-4 rounded-xl w-full'}
                        placeholder={'Your message'}
                    />
                    <button
                        type="submit"
                        className="bg-black bg-opacity-50 text-white font-bold py-4 rounded-xl px-4 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        disabled={isLoading}
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                    {success && <p className="text-green-500 mt-4">{success}</p>}
                </form>
            </div>
            <Footer/>
        </div>
    )
}
export default Page
