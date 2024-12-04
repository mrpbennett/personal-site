import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Social() {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/mrpbennett" aria-label="github profile">
        <BsGithub className="h-6 w-6 hover:text-green-500" />
      </a>
      <a
        href="https://www.linkedin.com/in/paulandrewbennett/"
        aria-label="linkedin profile"
      >
        <BsLinkedin className="h-6 w-6 hover:text-green-500" />
      </a>
      <a href="mailto:pbennett.uk@gmail.com" aria-label="send me an email">
        <MdEmail className="h-6 w-6 hover:text-green-500" />
      </a>
    </div>
  );
}
