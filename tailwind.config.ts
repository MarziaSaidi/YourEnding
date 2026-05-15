import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#f5efe2",
        night: "#0f100d",
        panel: "#1c1b17",
        violet: "#6b5a52",
        fuchsia: "#d97745",
        cyan: "#ff8a4c",
        mist: "#b8b0a0"
      },
      boxShadow: {
        card: "0 30px 90px rgba(7, 8, 6, 0.48)",
        glow: "0 0 0 1px rgba(217, 119, 69, 0.25), 0 24px 80px rgba(255, 138, 76, 0.14)"
      },
      backgroundImage: {
        aurora:
          "radial-gradient(circle at 15% 15%, rgba(255,138,76,0.22), transparent 22%), radial-gradient(circle at 80% 12%, rgba(217,119,69,0.16), transparent 25%), radial-gradient(circle at 50% 85%, rgba(107,90,82,0.18), transparent 32%)"
      }
    }
  },
  plugins: []
};

export default config;
