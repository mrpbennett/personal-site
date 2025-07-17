import Image from "next/image";
import Memoji from "../images/memoji.png";

const social = [
  {
    name: "Github",
    url: "https://github.com/mrpbennett",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/paulandrewbennett/",
  },
  {
    name: "Email",
    url: "mailto:paul@pnfb.uk",
  },
];

export default function About() {
  return (
    <div className="grid sm:auto-cols-auto sm:grid-flow-col">
      <section className="md:max-w-[75%]">
        <div>
          <div className="hidden items-center sm:block">
            <Image src={Memoji} alt="Memoji" width="200" height="200" />
          </div>
          <div className="flex justify-center sm:hidden">
            <Image src={Memoji} alt="Memoji" width="100" height="100" />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-center font-mono text-2xl font-bold sm:text-left">
            Paul Bennett
          </h2>
          <p className="text-center font-mono sm:text-left">mrpbennett</p>
        </div>

        <div className="divider divider-accent"></div>

        <div className="space-y-1">
          <p className="font-mono text-xs">Current: Lead Solution Engineer</p>
          <p className="font-mono text-xs text-gray-500">
            Future: Aspiring CTO
          </p>
        </div>

        <div>
          <ul className="mb-10 mt-4 flex items-center space-x-4 md:mb-0">
            {social.map((l) => (
              <li key={l.name}>
                <a
                  href={l.url}
                  className="badge badge-accent badge-outline font-mono no-underline hover:badge-secondary hover:badge-outline"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="prose mx-auto tracking-wide sm:prose-lg lg:max-w-[75%]">
        <div className="">
          <h1 className="font-bold">Hello 👋</h1>
          <p className="">
            Aspiring CTO and remote Lead Solutions Engineer passionate about
            building teams, fostering innovation, and creating scalable
            solutions. Obsessed with homelabs, emerging tech, and hands-on
            experimentation. Coffee-fueled days navigating the intersection of
            strategy, people management, and cutting-edge technology
          </p>
        </div>

        <article>
          <h2>Why this blog?</h2>

          <p>
            Welcome to my corner of the digital universe! I&apos;m a remote Lead
            Solutions Engineer with a passion for solving complex problems,
            especially in the realms of databases, SQL, and automation. While my
            Kubernetes cluster keeps me busy, my true excitement lies in
            crafting database solutions and building scalable systems that push
            boundaries—all within a tech playground that&apos;s both
            cutting-edge and wife-approved.
          </p>

          <p>
            This site is a reflection of my journey as I grow into a future CTO.
            I&apos;m fascinated by the possibilities of AI, large language
            models (LLMs), image generation, and the vast opportunities in Big
            Data. Alongside these technical interests, I find joy in leadership,
            management, and exploring productivity strategies that empower both
            teams and individuals.
          </p>
          <p>
            What you&apos;ll find here is a mix of code snippets, tech
            explorations, lessons learned, and candid insights into database
            engineering and administration. I&apos;ve traded the obsession over
            aesthetics for a focus on content—sharing ideas, innovations, and
            the occasional caffeine-inspired epiphany.
          </p>

          <p>
            Thanks for stopping by! Here&apos;s to navigating the ever-evolving
            tech landscape together.
          </p>
        </article>
      </section>
    </div>
  );
}
