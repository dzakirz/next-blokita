/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {}
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "light",
            "dark",
            {
                mytheme: {
                    primary: "#f43854",
                    secondary: "#e8a2e6",
                    accent: "#d13ac2",
                    neutral: "#392A3C",
                    "base-100": "#EAE9F2",
                    info: "#93B2EB",
                    success: "#2FD077",
                    warning: "#CC9005",
                    error: "#F6190E"
                }
            }
        ]
    }
}
