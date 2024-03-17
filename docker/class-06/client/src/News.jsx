import { NewsCard } from "./NewsCard";

export const News = ({ newsList, isCache }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-center">
        News List{" "}
        <span className="text-sm text-gray-500">({newsList.length})</span>
        {/* // put className conditionally on isCache */}
        <span className={isCache ? "text-red-500" : "text-green-500"}>
          {isCache ? " cached" : " live"}
        </span>
      </h3>
      <>
        {newsList.map((news) => (
          <NewsCard key={news.id} text={news.text} />
        ))}
      </>
    </div>
  );
};
