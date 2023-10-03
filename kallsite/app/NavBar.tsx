import Link from 'next/link'
import { navLinks } from '../global/navLinks'

export default function NavBar() {
    return (
        <nav className="sticky md:flex w-full bg-green-900 h-16">
            <div className="md:hidden flex border-4 border-black h-16">
                <div className="m-auto">TITLE MOBILE</div>
                <div className="">HAMBURGER</div>
            </div>
            <div className="md:w-1/2 hidden md:flex md:items-center md:ml-10 border-4 border-black">TITLE NOT MOBILE</div>
            <div className="hidden md:w-1/2 md:flex md:justify-end md:items-center md:gap-7 md:mr-10 border-4 border-black">
                {navLinks.map((link, index) => {
                   return (
                    <ul key={index}>
                        <Link href={link.path}>
                            <li key={index}>{link.name}</li>
                        </Link>
                    </ul>
                   ) 
                })}
            </div>
        </nav>
    )
}