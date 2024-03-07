import PropTypes from "prop-types";
import { icons } from "../contents/index.js";

function Service({ service }) {
    return (
        <div className=" bg-darkbg w-[350px] border-[1px] border-teal-900 rounded bg-opacity-75 hover:bg-opacity-95 sm:w-[320px] lg:w-[350px] py-8 px-10">
            <h1 className=" text-lg text-cyan-600 hover:text-cyan-300 font-inter tracking-wider font-medium pb-3">
                {service[0]}
            </h1>
            <ul>
                {service[1].map((list) => {
                    return (
                        <li
                            className=" text-teal-300 hover:text-teal-200 tracking-wider py-1 font-light"
                            key={Math.random()}
                        >
                            - {list}
                        </li>
                    );
                })}
            </ul>
            <div className="more pt-4 w-[120px] hover:underline decoration-1 underline-offset-2">
                <a
                    href="/"
                    className=" text-cyan-300 hover:text-cyan-100 tracking-wide font-light"
                >
                    <span className="flex gap-2 items-end">
                        <span>Know More</span>
                        <span>
                            <img
                                src={icons.RightArrow}
                                alt="right-arrow"
                                width={20}
                            />
                        </span>
                    </span>
                </a>
            </div>
        </div>
    );
}

Service.propTypes = {
    service: PropTypes.array,
};

export default Service;
