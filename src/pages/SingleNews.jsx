import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../lib/utils";
import RelatedNews from "../components/RelatedNews";
import Loading from "../components/Loading";
const BASE_URL = "https://api.markets.sh/api/v1/clusters/";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function SingleNews() {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [createdAt, setCreated_at] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(BASE_URL + id + "?api_token=" + API_TOKEN)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        console.log("children:", news.related_clusters?.children);
        console.log("parents: ", news.related_clusters?.parents);
        console.log("news: ", news);
        setLoading(false);
      });
    setCreated_at(formatDate(news.created_at));
  }, [id]);
  return (
    <div>
      <div className="py-12 space-y-3">
        <span className="py-2 text-green">{news.topic_class}</span>
        <h1 className="py-2 text-3xl font-black">{news.description}</h1>
        <span className="text-sm font-semibold text-gray-600">{createdAt}</span>
        <p className="text-lg text-gray-600">{news.teaser}</p>
        <p className="text-lg text-gray-600">{news.summary}</p>
        <h1 className="py-2 text-xl font-bold">News sources</h1>
        <div>
          {loading && <Loading />}
          {news.news_sources &&
            news.news_sources.map((n, idx) => {
              return (
                <span key={idx} className="text-sm font-semibold text-gray-500">
                  {n},{" "}
                </span>
              );
            })}
        </div>
      </div>
      <div>
        <div className="py-12">
          <h1 className="py-2 text-4xl font-black">Related News</h1>
          <div className="flex flex-col gap-4">
            {news.related_clusters &&
              news?.related_clusters?.children?.map((n, idx) => {
                return (
                  <RelatedNews
                    key={idx}
                    description={n.description}
                    uuid={n.uuid}
                  />
                );
              })}
            {news.related_clusters &&
              news?.related_clusters?.parents?.map((n, idx) => {
                return (
                  <RelatedNews
                    key={idx}
                    uuid={n.uuid}
                    description={n.description}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
