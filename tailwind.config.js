import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  darkMode: "class", // Enables 'class' based dark mode switching
  theme: {
    extend: {
      screens: {
        'custom-md-1': { min: '992px', max: '1100px' },
      },
      colors: {
        violet: { DEFAULT: "#8b5cf6" },
        red: { DEFAULT: "#ef4444" },
        purple: { DEFAULT: "#a855f7" },
        blue: { DEFAULT: "#3b82f6" },
        amber: { DEFAULT: "#f59e0b" },
        pink: { DEFAULT: "#ec4899" },
        lime: { DEFAULT: "#84cc16" },
        orange: { DEFAULT: "#f97316" },
        green: { DEFAULT: "#22c55e" },
        yellow: { DEFAULT: "#eab308" },
      },
    },
    backgroundImage: {
      // Add a custom gradient utility
      'conic-gradient': 'conic-gradient(var(--tw-gradient-stops))',
    },
  },
  safelist: [
    {
      pattern: /bg-(violet|red|purple|blue|amber|pink|lime|orange|green|yellow)/,
      variants: ["hover", "dark:hover", "xl:before", "dark:before"],
    },
    {
      pattern: /text-(violet|red|purple|blue|amber|pink|lime|orange|green|yellow)/,
      variants: ["hover", "dark:hover"],
    },
    {
      pattern: /border-(violet|red|purple|blue|amber|pink|lime|orange|green|yellow)/,
      variants: ["hover", "dark:hover"],
    },
    {
      pattern: /border-t-(violet|red|purple|blue|amber|pink|lime|orange|green|yellow)/,
    }
  ],
  plugins: [aspectRatio],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
};
