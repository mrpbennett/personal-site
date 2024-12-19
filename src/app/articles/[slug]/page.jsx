import { getAllArticles, getArticle } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

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

  const processedContent = await unified()
    .use(remarkParse) // Parse markdown to mdast
    .use(remarkRehype, { allowDangerousHtml: true }) // Transform to hast
    .use(rehypeHighlight) // Syntax highlighting
    .use(rehypeStringify, { allowDangerousHtml: true }) // Transform to html
    .process(article.content);

  const contentHtml = processedContent.toString();

  return (
    <main className="prose prose-lg mx-auto tracking-wide">
      <section className="">
        <h2 className="">{article.title}</h2>

        {article.image ? (
          <Image
            alt="Article Image"
            className="aspect-video w-full overflow-hidden rounded-xl object-cover"
            height="365"
            src={article.image.url}
            width="650"
          />
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
    </main>
  );
}
