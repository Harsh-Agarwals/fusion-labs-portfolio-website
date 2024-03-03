import arrowRight from "../assets/arrow-right.svg";
import PropTypes from "prop-types";

function Button({ text, type, img }) {
    const fixedClass =
        "inline flex flex-row gap-2 items-center font-bold text-[1rem] px-8 py-2.5 rounded-3xl border-[1px]";
    return (
        <div>
            <button
                className={`${fixedClass} ${
                    type === "stay"
                        ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white border-blue-600 hover:border-transparent"
                        : "bg-rose-500 text-white hover:bg-rose-600"
                }`}
            >
                {text} {img && <img src={arrowRight} alt="arrow-right" />}
            </button>
        </div>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.bool,
};

export default Button;
