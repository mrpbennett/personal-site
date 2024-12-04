import { getAllArticles } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="grid sm:auto-cols-auto sm:grid-flow-col">
      <section className="max-w-[75%]">tags wdwdwdwwwwww</section>

      <section className="">
        {articles.map((article) => (
          <article key={article.sys.id} className="flex flex-col">
            <div className="flex-1 p-6">
              <Link href={`/articles/${article.slug}`}>
                <h4 className="text-lg font-bold leading-tight">
                  {article.title}
                </h4>
              </Link>
              <div className="flex items-baseline justify-between">
                <div className="badge badge-primary">
                  {article.categoryName}
                </div>
                <div className="flex justify-end">
                  <Link
                    className="inline-flex h-10 items-center justify-center text-sm font-medium"
                    href={`/articles/${article.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
