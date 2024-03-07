import logo from "../assets/logo.svg";
import hamburgerx from "../assets/hamburgerx.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [navStatus, setNavStatus] = useState("hidden");
    const handleNavBar = () => {
        setNavStatus("block");
    };
    const cutNavBar = () => {
        setNavStatus("hidden");
    };
    useEffect(() => {}, [navStatus]);
    return (
        <nav
            className={`${
                navStatus === "hidden" ? "flex-row" : "flex-col gap-8"
            } bg-darkbg absolute top-0 w-full px-6 sm:px-8 md:px-10 flex flex-1 md:flex-row align-middle justify-between lg:justify-around py-8`}
        >
            <div
                className={`${
                    navStatus === "hidden" ? "" : "flex-row justify-between"
                } logo flex items-center`}
            >
                <a href="/" className="">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-[1.4rem] sm:h-auto"
                    />
                </a>
                <a
                    className={`${navStatus} md:hidden text-slate-400 text-xl me-4 cursor-pointer hover:text-slate-200`}
                    onClick={cutNavBar}
                >
                    X
                </a>
            </div>
            <div className="menu-list flex items-center">
                <ul
                    className={`${navStatus} text-lg md:text-base md:flex flex-1 flex-row align-middle justify-between md:gap-4 lg:gap-10 xl:gap-12 text-cyan-400`}
                >
                    <li className="p-4 border-b-2 md:p-0 md:border-none border-slate-600 tracking-wider font-mono font-normal text-normal">
                        <a
                            href="/"
                            className="hover:text-rose-500 cursor-pointer"
                        >
                            Home
                        </a>
                    </li>
                    <li className="p-4 border-b-2 md:p-0 md:border-none border-slate-600 tracking-wider font-mono font-normal text-normal hover:shadow-md">
                        <a
                            href="/"
                            className="hover:text-rose-500 cursor-pointer"
                        >
                            About
                        </a>
                    </li>
                    <li className="p-4 border-b-2 md:p-0 md:border-none border-slate-600 tracking-wider font-mono text-normal font-normal">
                        <a
                            href="/"
                            className="hover:text-rose-500 cursor-pointer"
                        >
                            Services
                        </a>
                    </li>
                    <li className="p-4 border-b-2 md:p-0 md:border-none border-slate-600 tracking-wider font-mono font-normal  text-normal">
                        <a
                            href="/"
                            className="hover:text-rose-500 cursor-pointer"
                        >
                            Blogs
                        </a>
                    </li>
                    <li className="p-4 border-b-2 md:p-0 md:border-none border-slate-600 tracking-wider font-mono font-normal  text-normal">
                        <a
                            href="/"
                            className="hover:text-rose-500 cursor-pointer"
                        >
                            Projects
                        </a>
                    </li>
                    {/* hover:[text-shadow:0px_2px_24px_lightcyan]  */}
                    {/* <p className="text-white tracking-widest font-semibold text-sm hover:text-rose-500">
                        RESUME
                    </p> */}
                </ul>

                <div onClick={handleNavBar}>
                    <img
                        src={hamburgerx}
                        alt="nav-menu"
                        className={`${
                            navStatus === "hidden" ? "" : "hidden"
                        } w-7 cursor-pointer md:hidden hover:fill-red-800`}
                    />
                </div>
            </div>
            <button
                className={`${navStatus} w-40 md:w-auto justify-center md:flex bg-sky-100 py-1.5 font-bold tracking-wider text-mainbg px-4 rounded-xl hover:shadow-[3px_3px_14px_crimson] hover:bg-sky-200 hover:text-mainbg`}
            >
                Contact
            </button>
        </nav>
    );
}
