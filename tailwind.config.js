/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#cfc5f9",
        
"secondary": "#a5ef4a",
        
"accent": "#e3ff0f",
        
"neutral": "#1A1221",
        
"base-100": "#FAFAFA",
        
"info": "#70BDD7",
        
"success": "#48EAD7",
        
"warning": "#94710A",
        
"error": "#F33030",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

