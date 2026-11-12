import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#182230", paper: "#f6f8fc", brand: "#6757e8", lime: "#d8f36a", lilac: "#efedff" }, boxShadow: { card: "0 12px 35px rgba(34, 41, 73, .07)" } } },
  plugins: [],
};
export default config;
