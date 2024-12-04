import { getAllArticles } from "@/lib/api";
import Link from "next/link";

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="grid sm:auto-cols-auto sm:grid-flow-col">
      <section className="max-w-[75%]">tags wdwdwdwwwwww</section>

      <section className="border border-gray-200">
        {articles.map((article) => (
          <article
            key={article.sys.id}
            className="flex h-full flex-col rounded-lg shadow-lg"
          >
            <div className="flex-1 p-6">
              <Link href={`/articles/${article.slug}`}>
                <h3 className="py-4 text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
                  {article.title}
                </h3>
              </Link>
              <div className="flex items-baseline justify-between">
                <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
                  {article.categoryName}
                </div>
                <div className="flex justify-end">
                  <Link
                    className="inline-flex h-10 items-center justify-center text-sm font-medium"
                    href={`/articles/${article.slug}`}
                  >
                    Read More →
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
