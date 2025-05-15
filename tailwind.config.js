/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "var(--background)",
          foreground: "var(--foreground)",
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          card: "var(--card)",
          'user-bubble': "var(--user-bubble)",
          'bot-bubble': "var(--bot-bubble)",
        },
      },
    },
    darkMode: "media", // or 'class' for manual toggle
    plugins: [],
  };
  