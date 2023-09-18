import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
function News({
  topic_class,
  description,
  teaser,
  created_at,
  news_sources,
  cluster_uuid,
}) {
  const [createdAt, setCreated_at] = useState("");
  useEffect(() => {
    const date = formatDate(created_at);
    setCreated_at(date);
  }, []);
  return (
    <Link to={`/news/${cluster_uuid}`}>
      <div className="p-4 space-y-2 transition-all rounded selection:text-white selection:bg-green">
        <span className="text-sm font-semibold text-green">{topic_class}</span>
        <h2 className="text-2xl font-black">{description}</h2>
        <p className="text-lg font-gray-600">{teaser}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-green">{news_sources[0]} & more</span>
          </div>
          <span className="mx-2 text-xs font-semibold text-gray-400">
            {createdAt}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default News;
