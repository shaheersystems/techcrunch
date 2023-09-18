import React, { useEffect, useState } from "react";
import News from "../components/News";
import Loading from "../components/Loading";
const BASE_URL = "https://api.markets.sh/api/v1/clusters?";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(BASE_URL + "api_token=" + API_TOKEN)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="py-12">
        <h1 className="py-2 text-4xl font-black">Latest News</h1>
      </div>
      <div>
        {loading && <Loading />}
        {news.map((n, idx) => {
          return <News key={idx} {...n} />;
        })}
      </div>
    </div>
  );
}

export default Home;
