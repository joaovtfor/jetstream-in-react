import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            transparent: 'transparent',
            'background': '#EDEDED',
            'theme-green': '#7CB927',
            'theme-blue-1': '#084D96',
            'theme-blue-2': '#145EA3',
            'theme-blue-light': '#0065C3',
            'theme-blue-lighter': '#0177E5',
            'theme-red': '#A31414',
        },
    },

    plugins: [forms, typography],
};
