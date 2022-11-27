import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import axios from "axios";

function ArtikelPage() {
  const [article, setArticle] = useState([]);
  const API =
    "https://data-base-article-default-rtdb.firebaseio.com/data-article/-NHnu7_0z809hEDcshST.json";

  useEffect(() => {
    axios.get(API).then((result) => {
      setArticle(result.data);
    });
  }, [setArticle]);

  return (
    <div className="box-content">
      <h1>ArtikelPage</h1>
      {article.map((post) => {
        return (
          <Article
            images={''}
            title={post.title}
            desc={post.description}
            url={post.url}
          />
        );
      })}
    </div>
  );
}

export default ArtikelPage;
