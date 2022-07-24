import Link from "next/link"
import React from "react"
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
    return (
        <nav className="bg-gray-50 w-full h-[60px] shadow-lg px-2">
            <div className="h-full flex items-center justify-between max-w-[1400px] mx-auto">
                <h1 className="font-bold text-2xl">
                    Blokita<span className="text-primary">.</span>
                </h1>
                <ul className="flex gap-3">
                    <Link href="signup">
                        <li className="font-semibold">SignIn</li>
                    </Link>
                </ul>
                <CgProfile size={26} className="hidden" />
            </div>
        </nav>
    )
}

export default Navbar
