import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { navItem } from "./data";

const Header = ({ screenWidth }) => {
    const [showMenu, setShowMenu] = useState(false);
    const ref = useRef();

    const useOnClickOutside = (ref, handler) => {
        useEffect(
            () => {
                const listener = (event) => {
                    if (!ref.current || ref.current.contains(event.target)) {
                        return;
                    }
                    handler(event);
                };
                document.addEventListener("mousedown", listener);
                document.addEventListener("touchstart", listener);
                return () => {
                    document.removeEventListener("mousedown", listener);
                    document.removeEventListener("touchstart", listener);
                };
            },
            [ref, handler]
        );
    }

    useOnClickOutside(ref, () => {
        setShowMenu(false);
    });

    useEffect(() => {
        showMenu ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    }, [showMenu]);

    return (
        <header className="absolute top-0 left-0 right-0 z-40 px-20px sm:px-50px 2xl:px-151px py-5px 2xl:py-14px">
            <nav className="flex items-center justify-between h-110px">
                <Image
                    src="/logo.svg"
                    width={screenWidth < 1536 ? 80 : 128}
                    height={screenWidth < 1536 ? 80 : 110}
                    objectFit="contain"
                    alt="logo"
                />
                <div className="items-center hidden space-x-34px 2xl:space-x-50px lg:flex">
                    <ul className="flex items-center justify-center font-medium text-white text-16px 2xl:text-20px space-x-32px 2xl:space-x-46px">
                        {navItem.map((item, index) => <li key={index}><Link href={item.link}><a>{item.title}</a></Link></li>)}
                    </ul>
                    <Link href="/">
                        <a style={{background:'#f8ac30'}} className="flex items-center justify-center font-medium text-white h-50px w-150px 2xl:h-70px 2xl:w-232px xl:text-16px 2xl:text-20px rounded-5px">Buy Token</a>
                    </Link>
                </div>
                {/* Small devices */}
                <MenuIcon onClick={() => setShowMenu(true)} className="block w-8 h-8 text-white cursor-pointer lg:hidden" />
                <div className={`lg:hidden z-40 fixed overflow-y-scroll w-screen h-screen transition-transform duration-700 ease-in-out transform inset-0 bg-blue-900 bg-opacity-40 ${!showMenu ? "translate-x-full" : ""}`}>
                    <div ref={ref} className="top-0 z-50 h-screen pt-5 pb-56 ml-auto bg-quinary w-72">
                        <div>
                            <div className="pl-4 pr-3">
                                <XIcon className="ml-auto text-white rounded-full cursor-pointer w-7 h-7" onClick={() => setShowMenu(false)} />
                            </div>
                            <ul className="flex flex-col mt-10 border-b border-white border-opacity-10">
                                {navItem.map((item, index) => <Link key={index} href={item.link}><a><li className="py-2.5 pl-6 pr-2 text-white border-t border-white border-opacity-10">{item.title}</li></a></Link>)}
                            </ul>
                            <Link href="/">
                                <a className="flex items-center justify-center mx-auto mt-10 text-center text-white h-50px w-127px text-16px 2xl:text-20px bg-primary rounded-5px">Contact Us</a>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Small devices */}
            </nav>
        </header>
    )
}

export default Header;