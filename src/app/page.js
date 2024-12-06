import { getAllArticles } from "@/lib/api";
import ArticlesList from "@/components/articleList"; // Adjust the import path as needed

export default async function Home() {
  const articles = await getAllArticles();

  return <ArticlesList articles={articles} />;
}
