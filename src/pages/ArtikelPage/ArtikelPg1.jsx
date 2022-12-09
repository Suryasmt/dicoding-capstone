import React, { useEffect, useState } from "react";
import Article from "../../components/Article";
import axios from "axios";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

function ArtikelPg1() {
  const [article, setArticle] = useState([]);
  const API =
    "https://parent-9fc99-default-rtdb.asia-southeast1.firebasedatabase.app/.json";

  useEffect(() => {
    axios.get(API).then((result) => {
      setArticle(result.data);
    });
  }, [setArticle]);

  return (
    <>
      <Navigation />
      <section id='artikel2'>
        <h2 className='artikel-judul'>Pola Asuh Anak</h2>
        <div className='artikel-listCard'>
          {article.map((post) => {
            if (post.categories[0].name === "Pola Asuh Anak") {
              return (
                <Article
                  images={post.image_url}
                  title={post.title}
                  desc={post.summary}
                  url={post.source_url}
                />
              );
            }
            return "";
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ArtikelPg1;
