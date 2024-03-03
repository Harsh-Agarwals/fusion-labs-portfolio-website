/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkbg: "#0D021B",
                darkbg2: "#5a081c",
            },
        },
    },
    plugins: [],
};
