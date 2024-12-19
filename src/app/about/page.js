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
    url: "mailto:pbennett.uk@gmail.com",
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

      <section className="prose prose-lg tracking-wide">
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
            Welcome to my corner of the digital universe. I&apos;m a remote Lead
            Solutions Engineer with a deep passion for databases, SQL, and
            automation. While my Kubernetes cluster is important, it&apos;s the
            world of database administration and engineering that truly
            captivates me. Fueled by coffee, I navigate the complexities of
            YAML, craft database solutions, and build in a wife-approved tech
            playground.
          </p>

          <p>
            This site has evolved from showcasing sleek designs to sharing my
            journey, discoveries, and lessons learned. Here, I&apos;ll document
            code snippets, explore technology, dive into SQL, and share insights
            on database administration and engineering.
          </p>

          <p>
            Gone are the days of worrying about the site&apos;s appearance. Now,
            I focus on content—tech discussions, documentation, and
            innovation—all served with a side of caffeine. Welcome to my digital
            playground.
          </p>
        </article>
      </section>
    </div>
  );
}
