import React from "react";
import Social from "./social";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col-reverse items-center py-10 sm:flex-row sm:justify-between">
      <aside className="">
        <span className="text-white">Paul Bennett</span> aka mrpbennett
      </aside>
      <nav className="md:place-self-center md:justify-self-end">
        <Social />
      </nav>
    </footer>
  );
}
