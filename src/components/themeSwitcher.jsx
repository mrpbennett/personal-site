"use client";

import React from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = React.useState("cupcake");
  const toggleTheme = () => {
    setTheme(theme === "night" ? "cupcake" : "night");

    document.querySelector("html").setAttribute("data-theme", theme);
  };

  const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)");
  const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

  React.useEffect(() => {
    if (prefersLightTheme.matches) {
      document.querySelector("html").setAttribute("data-theme", "cupcake");
    } else if (prefersDarkTheme.matches) {
      document.querySelector("html").setAttribute("data-theme", "night");
    }
  }, [prefersDarkTheme.matches, prefersLightTheme.matches]);

  return (
    <label className="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>

      <input
        type="checkbox"
        value="synthwave"
        className="theme-controller toggle"
        onClick={toggleTheme}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
    </label>
  );
}
