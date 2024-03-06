export default function Subscription() {
    return (
        <div className="subscribe text-center p-16 bg-sky-50 flex flex-col lg:p-20 shadow-[15px_0_155px_-50px_cornflowerblue_inset]">
            <h1 className=" font-inter text-4xl font-semibold pb-6 bg-gradient-to-r from-blue-700 to-rose-600 text-transparent bg-clip-text">
                SUBSCRIPTION
            </h1>
            <p className=" font-inter font-medium tracking-wide text-zinc-700">
                Subscribe to our Weekly{" "}
                <span className=" text-rose-600">
                    newsletter, blogs,{" "}
                    <span className=" font-bold">TIPS & TRICKS</span>
                </span>{" "}
                <br />
                to take your product to the next level!
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 pt-8 items-center">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className="p-2 w-full max-w-[450px] border-[3px] border-transparent border-sky-400 focus:border-sky-400 rounded-md outline-none font-inter text-sm tracking-wider font-semibold text-slate-600 mb-3 md:mb-0"
                />
                <button className="w-40 bg-rose-600 hover:bg-rose-700 text-lg font-medium text-white font-inter py-[6px] px-5 rounded-lg">
                    Subscribe
                </button>
            </div>
        </div>
    );
}
