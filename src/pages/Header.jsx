import headerx from "../assets/headerx.png";
import Button from "../Components/Button";
import { TypeAnimation } from "react-type-animation";
// import whatsapp from "../assets/whatsapp.svg";

export default function Header() {
    return (
        <header className="bg-sky-100 flex flex-1 pb-[8rem] lg:justify-center flex-col h-full md:text-center md:items-center lg:text-left lg:flex-row  ">
            <div className="header-content">
                {/* <img
                    src={headerimg2}
                    alt="header-img"
                    className="opacity-100 object-cover h-[100vh] minh1 absolute"
                /> */}
                <div className="content relative top-[8rem] ps-6 sm:ps-10 md:ps-0 md:w-[530px] lg:w-[600px] lg:ps-20 pe-10 md:pe-0 bg-sky-100 pb-8">
                    <div className="main-text">
                        <p className="pt-[2.5rem] text-lg text-rose-600 tracking-wider py-7 font-medium">
                            Launch your <span>Digital Empire</span> with our
                            expertise.
                        </p>
                        <h1 className="pb-8 font-bold text-4xl text-darkbg leading-[3rem] ">
                            One-Stop solution for all your <br />
                            <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-blue-700 text-transparent bg-clip-text text-[2.5rem]">
                                <TypeAnimation
                                    sequence={[
                                        "Web Development",
                                        3500,
                                        "E-Commerce",
                                        3000,
                                        "Affiliate Marketing",
                                        3500,
                                        "SEO",
                                        2000,
                                        "Ads & Marketing",
                                        3500,
                                    ]}
                                    repeat={Infinity}
                                    speed={1}
                                />
                            </span>
                            needs.
                        </h1>
                        <div className=" tracking-wide font-light ">
                            <span className="font-normal text-blue-950">
                                All Services Under One Hood,{" "}
                            </span>
                            <span className=" font-normal text-rose-600">
                                delivered by best{" "}
                                <span className=" font-semibold">
                                    professionals
                                </span>{" "}
                                for You.
                            </span>
                            <br />
                            <div className=" font-semibold text-slate-600 pt-2">
                                <span className="text-darkbg">
                                    Fuel Your Digital Dreams:
                                </span>{" "}
                                Begin Your Entrepreneurial Voyage with Our Range
                                of Professional Services.
                            </div>
                        </div>
                    </div>
                    <div className="buttons flex flex-row gap-3 md:justify-center lg:justify-start py-10">
                        <Button text="Explore more" type="stay" />
                        <Button text="Book a call" type="forward" img={true} />
                        {/* <a href="/">
                            <img
                                src={whatsapp}
                                alt="whatsapp-icon"
                                width={30}
                            />
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="header-image relative top-[5rem] sm:top-[4rem] bg-sky-100">
                <img
                    src={headerx}
                    alt="header-img"
                    style={{ width: "700px", height: "100%" }}
                    className="sm:w-[600px] lg:w-[800px] lg:pt-8"
                />
            </div>
        </header>
    );
}
