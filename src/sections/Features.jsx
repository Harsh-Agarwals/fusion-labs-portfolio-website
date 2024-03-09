import Feature from "../Components/Feature";
import { featureString } from "../contents/index.js";

export default function Features() {
    return (
        <div className="features-section bg-darkbg py-20">
            <div className="heading px-12 sm:text-center ps-20">
                <p className="pb-1 text-sky-500 sm:text-xl font-semibold tracking-wide">
                    Why us ?
                </p>
                <h1 className="text-4xl w-[300px] md:w-full sm:m-auto sm:pt-3 md:pt-0 font-inter font-bold bg-gradient-to-r from-indigo-600 via-rose-600 to-blue-800 text-transparent bg-clip-text tracking-wide">
                    What makes us Different?
                </h1>
            </div>
            {/* <h1 className=" font-bold tracking-wide font-inter text-[42px] bg-gradient-to-r from-indigo-600 via-rose-600 to-blue-800 text-transparent bg-clip-text text-center">
                Our features
            </h1> */}
            <div className="features font-inter flex flex-wrap mt-12 justify-center gap-3 px-8 mb-4">
                {featureString.map((feature) => {
                    return (
                        <Feature
                            key={feature[0]}
                            head={feature[1]}
                            feature={feature[0]}
                        />
                    );
                })}
            </div>
        </div>
    );
}
