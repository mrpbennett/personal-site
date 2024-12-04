import { getAllArticles, getArticle } from "@/lib/api";

import Image from "next/image";
import { notFound } from "next/navigation";

import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function PostArticlePage({ params }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const processedContent = await remark().use(html).process(article.content);
  const contentHtml = processedContent.toString();

  return (
    <main className="prose-md prose mx-auto">
      <section className="">
        <h2 className="">{article.title}</h2>

        {article.image?.url !== "" ? null : (
          <Image
            alt="Article Image"
            className="aspect-video w-full overflow-hidden rounded-xl object-cover"
            height="365"
            src={article.image?.url || null}
            width="650"
          />
        )}

        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
    </main>
  );
}
