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
    <section id='artikel2'>
      <h2 className='artikel-judul'>Artikel Terkait</h2>
      <div className='artikel-listCard'>
      {article.map((post) => {
        return (
          <Article
            images={post.image}
            title={post.title}
            desc={post.description}
            url={post.url}
          />
        );
      })}
      </div>
    </section>
  );
}

export default ArtikelPage;
