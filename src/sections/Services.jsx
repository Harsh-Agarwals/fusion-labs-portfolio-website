import Service from "../Components/Service.jsx";
import { services } from "../contents/index.js";

export default function Services() {
    return (
        <div className=" bg-darkbg2 pb-20 relative">
            <div className=" absolute bg-gradient-to-l from-rose-500 blur-[90px] brightness-80% to-blue-800 h-96 w-96 top-40 md:top-12 right-4 xl:right-20"></div>
            <div className=" absolute bg-gradient-to-l from-rose-500 blur-[90px] brightness-80% to-blue-600 h-96 w-96 bottom-12 left-0 xl:left-40"></div>
            <h1 className=" text-center text-4xl font-bold font-inter tracking-wide bg-gradient-to-r from-sky-500 to-blue-800 text-transparent bg-clip-text py-10 pt-[72px] pb-[60px]">
                Our Services
            </h1>
            <div className="service-section relative flex flex-wrap justify-center gap-8 px-10">
                {services.map((service) => {
                    return <Service key={service[0]} service={service} />;
                })}
            </div>
        </div>
    );
}
