
'use client'

import Link from "next/link";
import { useIsVisible } from "../context/contact-context";

export default function Header() {

    const {isVisible,setIsVisible} = useIsVisible()
    
    
    return (
        <header className="absolute top-5 right-12 flex gap-4">
          <Link href="" className=""><h1 className="">Work</h1></Link>
          <button onClick={() => {setIsVisible(true);console.log(isVisible);
          }} className=""><h1 className="">Contact</h1></button>
        </header>
    )
}