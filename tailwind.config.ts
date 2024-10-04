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
        primary: "#FFFFFF",
        secondary: "#674636",
        error: "#EE4E4E",
        background: "#F7F8FC",
        success: "#347928",
        neutral: "#A66E38",
        icon: "#5E76BF"
      },
    },
  },
  plugins: [],
};
export default config;
