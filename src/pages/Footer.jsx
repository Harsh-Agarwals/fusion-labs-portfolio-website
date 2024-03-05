import Button from "../Components/Button";
import { smIcons } from "../contents/index.js";

export default function Footer() {
    return (
        <div className="footer ">
            <div className="main shadow-[15px_0_155px_-100px_crimson_inset] flex gap-4 flex-col flex-1 md:flex-row md:justify-center pt-16 md:pb-16 md:gap-0 xl:justify-around bg-darkbg px-8">
                <div className="connect md:w-[40%]">
                    <h1 className=" font-inter text-3xl font-light bg-gradient-to-r from-sky-300 via-rose-500 to-blue-900 text-transparent bg-clip-text">
                        LET&apos;S TALK
                    </h1>
                    <p className="pe-8 font-medium text-slate-400 py-8">
                        Ready to turn your digital vision into reality?
                        Let&apos;s chat and make it happen!
                    </p>
                    <Button text="Mail Us" type="stay" />
                </div>
                <div className="smx flex flex-col sm:flex-row sm:me-14 md:me-0 md:gap-10 lg:gap-16 xl:gap-20">
                    <div className="explore sm:pt-8 sm:pb-12 pt-14 md:pt-0 md:justify-center flex flex-1 flex-row gap-10 lg:gap-16 md:gap-5">
                        <div className="about">
                            <h1 className="py-2 md:py-0 md:pb-2 tracking-wide font-semibold text-lg text-blue-400">
                                About Us
                            </h1>
                            <div className="list">
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Services
                                    </a>
                                </p>
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Features
                                    </a>
                                </p>
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Projects
                                    </a>
                                </p>
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Blogs
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="useful">
                            <h1 className=" tracking-wide md:py-0 md:pb-2 py-2 font-semibold text-lg text-blue-400">
                                Useful Links
                            </h1>
                            <div className="list">
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Pricing
                                    </a>
                                </p>
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Email
                                    </a>
                                </p>
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Subscription
                                    </a>
                                </p>
                                <p className=" text-base text-slate-500 py-1">
                                    <a
                                        href="/"
                                        className="hover:text-slate-300"
                                    >
                                        Contact
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="media pt-12 sm:pt-10 md:pt-0">
                        <h1 className=" font-semibold text-2xl tracking-wide text-rose-500">
                            Contact
                        </h1>
                        <div className="media-content py-6 pb-14">
                            <div className="phone">
                                <p className=" font-inter text-sm py-1 font-light tracking-widest text-sky-600">
                                    <a href="/" className="hover:text-sky-300">
                                        +91 85294-18524
                                    </a>
                                </p>
                            </div>
                            <div className="email">
                                <p className=" font-inter text-sm py-1 font-light tracking-widest text-sky-600">
                                    <a href="/" className="hover:text-sky-300">
                                        support@fusionlabs.co.in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom px-10 flex flex-1 sm:py-8 sm:flex-row sm:items-center sm:justify-between md:px-16 lg:px-24 flex-col-reverse gap-4 bg-darkbg2 py-10">
                <div>
                    <p className=" font-light text-base text-white tracking-wider">
                        Made with ❤ by Fusionlabs
                    </p>
                </div>
                <div className="sm flex flex-row sm:pt-0 pt-2 gap-[2px]">
                    <div>
                        <div className="p-1 bg-sky-500 hover:bg-blue-600">
                            <a href="/">
                                <img
                                    src={smIcons.Email}
                                    alt="whatsapp"
                                    width={20}
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="p-1 bg-sky-500 hover:bg-blue-600">
                            <a href="/">
                                <img
                                    src={smIcons.PhoneCall}
                                    alt="whatsapp"
                                    width={20}
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="p-1 bg-sky-500 hover:bg-blue-600">
                            <a href="/">
                                <img
                                    src={smIcons.Whatsapp}
                                    alt="whatsapp"
                                    width={20}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
