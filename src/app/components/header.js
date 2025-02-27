
'use client'

import Link from "next/link";
import { useIsVisible } from "../context/contact-context";

export default function Header() {

    const {isVisible,setIsVisible} = useIsVisible()
    
    
    return (
        <header className="sticky lg:w-[95%] md:w-4/5 px-14 p-5 w-screen top-0 bg-blue-950 z-10">
          <ul className="cursor-pointer flex justify-end items-center gap-4">
            <li>
              <Link href="" className="">Work</Link>
            </li>
            <li onClick={() => {setIsVisible(true);console.log(isVisible)}}>
                Contact
            </li>
          </ul>
        </header>
    )
}