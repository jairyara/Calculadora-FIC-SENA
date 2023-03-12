/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bg: '#f2f2f2',
                white: '#FFFFFF',
                black: '#404040',
                darkGray: '#6B6B6B',
                lightGray: '#A6A6A6',
                primary: '#9F5AFF',
                secondary: '#B47EFF',
                success: '#4CAF50',
                warning: '#F9D342',
                error: '#F44336',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}