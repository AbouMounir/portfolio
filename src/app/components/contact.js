'use client'

import Link from "next/link";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useIsVisible } from "../context/contact-context";
import FormGroup from "./form_group";


export default function Contact({}) {

    const [formData, setFormData] = useState(
        { 
            lastName: '', 
            firstName: '', 
            tel: '', 
            mail: '', 
            subject: '', 
            message: '' 
        });

    const {isVisible,setIsVisible} = useIsVisible()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setIsVisible(isVisible)
        const response = await fetch('/api/send_email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        const data = await response.json();
        if (response.ok) {
          setStatus('Email sent successfully!');
          setFormData({ 
            lastName: '', 
            firstName: '', 
            tel: '', 
            mail: '', 
            subject: '', 
            message: '' 
            });
        } else {
          setStatus(`Error: ${data.message}`);
        }
      };
    

    return (
        <div className={`z-50 hidden p-5 w-2/5 rounded-xl fixed top-10 right-1/2 translate-x-1/2 bg-blue-100 shadow-md ${isVisible && '!block'}`}>
            <Link href='/' onClick={() => setIsVisible(false)} className="absolute top-5 right-8">
                <XCircleIcon className="h-6 w-6 text-blue-800 hover:text-blue-950" />
            </Link>

            <form action="api/send_email.js" method="POST" className="mt-10 flex flex-col gap-4 text-slate-500">
                <div className="w-full flex gap-2">
                    <FormGroup label="First name" inputName='firstName' isRequiered={true} value={formData.firstName} setValue={handleChange}/>
                    <FormGroup label="Last name" inputName='lastName' isRequiered={true} value={formData.lastName} setValue={handleChange}/>
                </div>

                <div className="flex gap-2">
                    <FormGroup label="Télephone" inputName='tel' isRequiered={true} value={formData.tel} setValue={handleChange}/>
                    <FormGroup label="Email" inputName='mail' isRequiered={true} value={formData.mail} setValue={handleChange}/>
                </div>

                <FormGroup label="Subject" inputName='subject' isRequiered={true} value={formData.subject} setValue={handleChange}/>

                <div className="flex flex-col gap-2">
                    <label htmlFor=""> Message </label>
                    <textarea className="w-full p-3 border-2 rounded-lg focus:outline-0 focus:border-blue-500" name="message" value={formData.message} rows={6} onChange={handleChange} type="text" placeholder="Votre message..."></textarea>
                </div>

                <button onClick={handleSubmit} className="px-6 py-2 rounded-lg bg-blue-800 hover:bg-blue-950 text-white">
                        Soumettre
                    </button>
            </form>
        </div>
    )
}