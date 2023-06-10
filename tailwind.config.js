/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors : {
        primary : "#027fc2",
        secoundary : "#ff7350",
      }
     
    },
  },
  plugins: [],
}
