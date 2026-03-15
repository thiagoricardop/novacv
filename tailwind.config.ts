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
        brand: {
          blue: "#2E3192",
          pink: "#E91E63",
          violet: "#7C3AED",
          orange: "#FF8A00",
          yellow: "#FFD84D",
          dark: "#11142D",
          light: "#F7F8FD",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2E3192 0%, #7C3AED 50%, #E91E63 100%)",
        "brand-soft":
          "radial-gradient(circle at top left, rgba(233,30,99,.18), transparent 35%), radial-gradient(circle at top right, rgba(46,49,146,.18), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f7f8fd 100%)",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(46, 49, 146, 0.15)",
        card: "0 16px 40px rgba(17, 20, 45, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.65" },
          "70%": { transform: "scale(1.08)", opacity: "0" },
          "100%": { transform: "scale(1.08)", opacity: "0" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        pulseRing: "pulseRing 2.8s ease-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
