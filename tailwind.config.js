/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FBF3E1",
        paper: "#FFFDF8",
        ink: "#201A14",
        kernel: "#6B4A2B",
        butter: {
          DEFAULT: "#F0A93A",
          light: "#F7C874",
          dark: "#D68E1F",
        },
        popred: {
          DEFAULT: "#C4361F",
          dark: "#9C2A18",
        },
        tiptop: {
          navy: "#152168",
          red: "#C21F2E",
          yellow: "#F5C242",
          cream: "#FBF1DC",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-baloo)", "sans-serif"],
      },
      backgroundImage: {
        "kernel-burst":
          "radial-gradient(circle at 1px 1px, rgba(32,26,20,0.08) 1.5px, transparent 0)",
      },
      backgroundSize: {
        "kernel-grid": "26px 26px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
