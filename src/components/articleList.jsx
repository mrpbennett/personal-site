"use client";
import { useState } from "react";
import Link from "next/link";

export default function ArticlesList({ articles }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to split and trim categories
  const splitCategories = (categoryString) => {
    if (!categoryString) return [];
    return categoryString.split(",").map((cat) => cat.trim());
  };

  // Create a map of all categories and their counts
  const categories = articles.reduce((acc, article) => {
    if (article.categoryName) {
      const cats = splitCategories(article.categoryName);
      cats.forEach((cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
      });
    }
    return acc;
  }, {});

  // Filter articles based on selected category
  const filteredArticles = selectedCategory
    ? articles.filter((article) => {
        const cats = splitCategories(article.categoryName);
        return cats.includes(selectedCategory);
      })
    : articles;

  return (
    <div className="grid sm:auto-cols-auto sm:grid-flow-col">
      <section className="max-w-[75%]">
        <div
          className={`mb-2 flex cursor-pointer items-center gap-2 ${
            selectedCategory === null ? "font-bold" : ""
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          <span>All Posts</span>
          <span className="text-sm text-gray-500">({articles.length})</span>
        </div>
        {Object.entries(categories).map(([category, count]) => (
          <div
            key={category}
            className={`flex cursor-pointer items-center gap-2 ${
              selectedCategory === category ? "text-green-500" : ""
            }`}
            // Modified click handler - just set the category
            onClick={() => setSelectedCategory(category)}
          >
            <span>{category}</span>
            <span className="text-sm text-gray-500">({count})</span>
          </div>
        ))}
      </section>

      <section className="">
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
