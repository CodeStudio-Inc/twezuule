import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6faf9",
          100: "#c3f2f1",
          200: "#98e7e5",
          300: "#66dcd8",
          400: "#33d0c8",
          500: "#07bab7",
          600: "#05a79c",
          700: "#058c7e",
          800: "#056d61",
          900: "#045146",
        },
        accent: {
          50: "#e6f8f1",
          100: "#c4f0df",
          200: "#97e5c8",
          300: "#5fd8ad",
          400: "#2ccc94",
          500: "#05bf86",
          600: "#04a874",
          700: "#03895e",
          800: "#026846",
          900: "#024c34",
        },
        navy: {
          900: "#09233c",
        },
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(59, 130, 246, 0.5)",
      },
    },
  },
  plugins: [typography],
};

export default config;
