export default {
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
      keyframes: {
        page: {
          '0%': { transform: 'rotateY(180deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '35%': { opacity: '0' },
          '50%': { transform: 'rotateY(0deg)' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'page': 'page 3s ease infinite',
      },
    },
  },
  plugins: [],
};

