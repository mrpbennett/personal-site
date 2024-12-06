"use client";
import { useState } from "react";
import Link from "next/link";

export default function ArticlesList({ articles }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const splitCategories = (categoryString) => {
    if (!categoryString) return [];
    return categoryString.split(",").map((cat) => cat.trim());
  };

  const categories = articles.reduce((acc, article) => {
    if (article.categoryName) {
      const cats = splitCategories(article.categoryName);
      cats.forEach((cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
      });
    }
    return acc;
  }, {});

  const filteredArticles = selectedCategory
    ? articles.filter((article) => {
        const cats = splitCategories(article.categoryName);
        return cats.includes(selectedCategory);
      })
    : articles;

  return (
    <div className="flex flex-row justify-center gap-20">
      <section>
        <div
          className={`mb-2 flex cursor-pointer items-center ${
            selectedCategory === null ? "font-bold" : ""
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          <span>All Posts</span>
        </div>
        {Object.entries(categories).map(([category, count]) => (
          <div
            key={category}
            className={`flex cursor-pointer items-center space-y-2${
              selectedCategory === category ? "text-green-500" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            <span>{category}</span>
            <span className="ml-2 text-sm text-gray-500">({count})</span>
          </div>
        ))}
      </section>

      <section className="prose">
        {filteredArticles.map((article) => (
          <article key={article.sys.id} className="flex flex-col">
            <div className="flex-1 p-6">
              <Link href={`/articles/${article.slug}`}>
                <h4 className="text-lg font-bold leading-tight">
                  {article.title}
                </h4>
              </Link>
              <div className="flex items-baseline justify-between">
                <div className="flex gap-2">
                  {splitCategories(article.categoryName).map((cat) => (
                    <div key={cat} className="badge badge-primary">
                      {cat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
