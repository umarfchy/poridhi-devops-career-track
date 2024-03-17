const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

// NOTE: One is get request and another is post request.

export const getNews = async () => {
  const resp = await fetch(`${baseUrl}/news`);
  const data = await resp.json();
  return data;
};

export const createNews = async (text) => {
  const resp = await fetch(`${baseUrl}/news`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const data = await resp.json();
  return data;
};
