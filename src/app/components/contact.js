'use client'

import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useIsVisible } from "../context/contact-context";


export default function Contact({}) {

    const [name, setName] = useState()
    const [tel, setTel] = useState()
    const [mail, setMail] = useState()
    const [message, setMessage] = useState()

    const {isVisible,setIsVisible} = useIsVisible()

    function handleSubmit() {
        setIsVisible(!isVisible)
    }

    return (
        <div className={`hidden p-8 w-1/2 rounded-xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-slate-50 shadow-md ${isVisible && '!block'}`}>
            <Link href='/' onClick={() => setIsVisible(false)} className="absolute top-5 right-8">
                <XCircleIcon className="h-6 w-6 text-gray-500" />
            </Link>
            <form className="mt-10 flex flex-col gap-3 text-slate-500">
                <input className="w-full p-3 border-2 rounded-lg" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Nom et Prénoms" />
                <input className="w-full p-3 border-2 rounded-lg" value={tel} onChange={(e) => setTel(e.target.value)} type="number" placeholder="Téléphone"/>
                <input className="w-full p-3 border-2 rounded-lg" value={mail} onChange={(e) => setMail(e.target.value)} type="mail" placeholder="Email"/>
                <textarea className="w-full p-3 border-2 rounded-lg" value={message} rows={6} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Votre message..."></textarea>
                <Link href='/'>
                    <button onClick={handleSubmit} className="px-6 py-2 rounded-lg bg-orange-500 text-white">
                        Soumettre
                    </button>
                </Link>
            </form>
        </div>
    )
}