import React, { useEffect, useState } from "react";
import { FaCalculator } from "react-icons/fa";
import { RiDiscussFill } from "react-icons/ri";
import { BsBookFill } from "react-icons/bs";
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
            <h1 className="content-info__title">Percayakan setiap fase kehamilan dan perkembangan si kecil kepada Smart Parents</h1>
            <p className="content-info__desc">
            Platform ini menyediakan article-article yang bermanfaat dari fase kehamilan sampai anak besar. Disini para orang tua juga bisa memanfaatkan Forum Diskusi untuk mencari solusi dan memberi solusi. dan disini juga tersedia Kalkulator Kelahiran untuk mengetahui calon anak yang akan lahir. 
            </p>
          </div>
          <div className="content-info__images">
            <img className="image-1" src={gallery1} alt="" />
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
