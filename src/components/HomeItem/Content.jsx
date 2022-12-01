import React, { useEffect, useState } from "react";
import { FaCalculator } from "react-icons/fa";
import { RiDiscussFill } from "react-icons/ri";
import { BsBookFill } from "react-icons/bs";
import gallery1 from "../../assets/Image 1.jpg";
import gallery2 from "../../assets/Image 2.jpg";
import gallery3 from "../../assets/Image 3.jpg";
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
      <div className="box-item">
        <div className="item-motto">
          <p>
            Percayakan setiap fase kehamilan dan perkembangan si kecil kepada
            smart parents
          </p>
        </div>
      </div>
      <div className="box-content">
        <div className="content-info">
          <div className="content-info__inner">
            <h1 className="content-info__title">Smart Parent</h1>
            <p className="content-info__desc">
              Smart parents merupakan website yang dibuat dengan tujuan untuk
              mencerdaskan orang tua di Indonesia, terutama orang tua muda agar
              memiliki pengetahuan yang cukup mengenai fase kehamilan dan fase
              parenting atau fase mengasuh anak.
            </p>
          </div>
          <div className="content-info__images">
            <img className="image-1" src={gallery1} alt="" />
            <img className="image-2" src={gallery2} alt="" />
            <img className="image-3" src={gallery3} alt="" />
          </div>
        </div>
      </div>
      <div className="box-item">
        <span className="item-fitur">
          <FaCalculator />
          <p className="item-fitur__title">Kalkulator Kehamilan</p>
        </span>
        <span className="item-fitur">
          <RiDiscussFill />
          <p className="item-fitur__title">Forum Diskusi</p>
        </span>
        <span className="item-fitur">
          <BsBookFill />
          <p className="item-fitur__title">Artikel Keluarga</p>
        </span>
      </div>
      <section id="artikel2">
        <h2 className="artikel-judul">Artikel Terkait</h2>
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
