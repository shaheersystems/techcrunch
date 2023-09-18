import React from "react";
import { Link } from "react-router-dom";
function RelatedNews({ uuid, description }) {
  return (
    <div className="space-y-2 transition-all rounded selection:text-white selection:bg-green">
      <h2 className="text-lg font-semibold">{description}</h2>
      <Link className="text-sm font-semibold text-green" to={`/news/${uuid}`}>
        Read more &rarr;
      </Link>
    </div>
  );
}

export default RelatedNews;
