import PropTypes from "prop-types";

function Tech({ stack, imgURL }) {
    return (
        <div className="flex flex-col gap-2 align-middle justify-end">
            <img src={imgURL} alt={stack} className="w-20" />
            <h1 className=" font-light tracking-wider text-sky-500">{stack}</h1>
        </div>
    );
}

Tech.propTypes = {
    stack: PropTypes.string,
    imgURL: PropTypes.string,
};

export default Tech;
