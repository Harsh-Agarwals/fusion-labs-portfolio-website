import PropTypes from "prop-types";

function Feature({ head, feature }) {
    return (
        <div
            className="feature hover:shadow-[0px_8px_14px_-4px_crimson] hover:border-purple-600 flex justify-start items-start gap-4 border-[0.1px] border-transparent p-2 rounded-xl"
            style={{ maxWidth: "200px" }}
        >
            <div
                className="flex items-center gap-4 border-yellow-600  p-2 rounded-xl"
                style={{ maxWidth: "200px" }}
            >
                <div className=" bg-blue-900 p-2 rounded-xl">
                    <img
                        src={head}
                        alt={feature}
                        width={45}
                        className="hover:shadow-md shadow-sky-200"
                    />
                </div>
                <p className=" text-sky-200 font-normal text-sm tracking-wide">
                    {feature}
                </p>
            </div>
        </div>
    );
}

Feature.propTypes = {
    head: PropTypes.string,
    feature: PropTypes.string,
};

export default Feature;
