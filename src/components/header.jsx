import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    name: "Articles",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
];

export default function Header() {
  return (
    <div className="navbar pb-10">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost">
          mrpbennett.dev
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-8 px-1">
          {links.map((l) => (
            <Link key={l.id} href={l.url} passHref>
              <span className="btn btn-ghost">{l.name}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
