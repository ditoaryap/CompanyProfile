import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'handphone': '390px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1280px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily : {
        workbench_test : ['var(--font-workbench_test)']
      }
    },
  },
  plugins: [],
};
export default config;
