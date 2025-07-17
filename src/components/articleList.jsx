"use client";
import Link from "next/link";
import { useState } from "react";

export default function ArticlesList({ articles }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const splitCategories = (categoryString) => {
    if (!categoryString) {
      return [];
    }
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

  const filteredArticles = articles.filter((article) => {
    const categoryMatch = selectedCategory
      ? splitCategories(article.categoryName).includes(selectedCategory)
      : true;

    const searchMatch = searchTerm
      ? article.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return categoryMatch && searchMatch;
  });

  return (
    <div className="flex flex-row justify-center gap-20 font-mono">
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
            className={`flex cursor-pointer items-center lowercase space-y-2${
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
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-md border border-gray-600 p-2 text-sm"
          />
        </div>

        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
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
          ))
        ) : (
          <div className="py-8 text-center">
            <p className="text-gray-500">
              No articles found {searchTerm && `matching "${searchTerm}"`}
              {selectedCategory && (searchTerm ? " in " : " for category ")}
              {selectedCategory && (
                <span className="font-medium">{selectedCategory}</span>
              )}
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory(null);
              }}
              className="mt-4 text-sm text-blue-500 hover:text-blue-600"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
