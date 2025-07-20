import {Config} from "tailwindcss";

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            fontFamily: {
                neulis: ["var(--font-neulis-regular)"],
                neulisAlt: ["var(--font-neulisalt-regular)"],
            }
        }
    }
}