import React, { useEffect, useState } from "react";
import Article from "../components/Article";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
    <>
      <Navigation />
      <section id="artikel2">
        <h2 className="artikel-judul">Artikel Terkait</h2>
        <div className="artikel-listCard">
          {article.map((article) => {
            return (
              <Article
                images={article.image}
                title={article.title}
                desc={article.description}
                url={article.url}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ArtikelPage;
