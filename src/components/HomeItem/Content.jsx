import React, { useEffect, useState } from "react";
import { GrArticle } from "@react-icons/all-files/gr/GrArticle";
import { RiDiscussFill } from "react-icons/ri";
import { RiArticleLine } from "@react-icons/all-files/ri/RiArticleLine";
import gallery1 from "../../assets/hero-image-vektor.png";
import Article from "../Article";
import axios from "axios";

const Content = () => {
  const [article, setArticle] = useState([]);
  const API =
    "https://data-base-article-default-rtdb.firebaseio.com/data-article/-NHnu7_0z809hEDcshST.json";

  useEffect(() => {
    axios.get(API).then((result) => {
      setArticle(result.data);
    });
  }, []);
  const setPopular = article.filter((postFilter) => {
    return postFilter.popular === "true";
  });
  // console.log(setPopular);
  return (
    <>
      <div className="box-content">
        <div className="content-info">
          <div className="content-info__inner">
            <h1 className="content-info__title">Bersama Smart Parents fase kehamilan dan perkembangan anak menjadi lebih mudah</h1>
            <p className="content-info__desc">
            Platform ini menyediakan article-article yang bermanfaat seputar fase kehamilan dan parenting. Disini para orang tua juga bisa memanfaatkan forum live chat untuk bertanya dan menjawab.
            </p>
          </div>
          <div className="content-info__images">
            <img className="image-1" src={gallery1} alt="" />
          </div>
        </div>
      </div>
      <div className="box-item">
        <span className="item-fitur">
          <GrArticle />
          <p className="item-fitur__title">Kehamilan</p>
        </span>
        <span className="item-fitur">
          <RiDiscussFill />
          <p className="item-fitur__title">Live Chat</p>
        </span>
        <span className="item-fitur">
          <RiArticleLine />
          <p className="item-fitur__title">Pola Asuh</p>
        </span>
      </div>
      <section id="artikel2">
        <h2 className="artikel-judul">Artikel Populer</h2>
        <div className="artikel-listCard">
          {setPopular.map((popular) => {
            return (
              <Article
                key={popular.id}
                images={popular.image}
                title={popular.title}
                desc={popular.description}
                url={popular.url}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Content;
