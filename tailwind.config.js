/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["cupcake", "night"],
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "var(--tw-prose-pre-bg)",
              color: "var(--tw-prose-pre-code)",
              padding: "0",
            },
            code: {
              backgroundColor: "var(--tw-prose-pre-bg)",
              color: "var(--tw-prose-pre-code)",
              fontWeight: "400",
              borderRadius: "0.375rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
