import Feature from "../Components/Feature";
import { featureString } from "../contents/index.js";

export default function Features() {
    return (
        <div className="features-section bg-darkbg py-20">
            <h1 className=" font-bold tracking-wide font-inter text-[42px] bg-gradient-to-r from-indigo-600 via-rose-600 to-blue-800 text-transparent bg-clip-text text-center">
                Our features
            </h1>
            <div className="features font-inter flex flex-wrap mt-10 justify-center gap-3 px-8">
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
