import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="sticky top-0 w-56 h-full px-6 py-10 bg-white">
      <Link to="/">
        <h1 className="text-xl font-black text-green">TechCrunch</h1>
      </Link>
    </aside>
  );
}

export default Sidebar;
