const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  date
  slug
  content
  categoryName
  image {
    url
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),

      next: { tags: ["articles"] },
    },
  ).then((response) => response.json());
}

function extractArticleEntries(fetchResponse) {
  if (!fetchResponse?.data?.postsCollection) {
    console.error("Invalid API response:", fetchResponse);
    return [];
  }
  return fetchResponse.data.postsCollection.items || [];
}

export async function getAllArticles(isDraftMode = false) {
  const articles = await fetchGraphQL(
    `query {
        postsCollection(where:{slug_exists: true}, order: date_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  );
  return extractArticleEntries(articles);
}

export async function getArticle(slug, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
        postsCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  );
  return extractArticleEntries(article)[0];
}
