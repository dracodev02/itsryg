import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'sf-pro-display': ['var(--font-sf-pro-display)', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        "monument-extended": [ 'var(--font-monument-extended)', "sans-serif" ],
      },
    },
  },
  plugins: [],
};
export default config;
