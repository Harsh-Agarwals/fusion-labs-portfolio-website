import Tech from "../Components/Tech.jsx";
import Techs from "../assets/techs.svg";
import { TechstackIcons } from "../contents/index.js";

export default function TechStacks() {
    return (
        <div className=" bg-darkbg2 px-6 py-8">
            <div className="images">
                <img src={Techs} alt="tech" />
            </div>
            <div className="stacks font-inter max-w-[750px]">
                <h1 className=" font-bold tracking-wide text-center text-4xl pb-12 bg-gradient-to-r from-sky-400 to-blue-900 text-transparent bg-clip-text">
                    TECH STACKS
                </h1>
                <div className="text-center sm:px-16 flex flex-1 flex-wrap gap-8 justify-center">
                    {Object.keys(TechstackIcons).map((stack) => {
                        return (
                            <Tech
                                key={stack}
                                imgURL={TechstackIcons[stack]}
                                stack={stack}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
