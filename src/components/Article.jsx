import React from "react";
import axios from "axios";

const API =
  "https://data-base-article-default-rtdb.firebaseio.com/data-article.json";
const Article = (props) => {
  axios.get(API).then((res) => {
    console.log(res);
  });

  return (
    <div className="card-article">
      <div className="img-thumb">
        <img src={props.images} alt="" />
      </div>
      <div className="article-text">
        <p className="article-text__title">{props.title}</p>
        <p className="article-text__desc">{props.desc}</p>
      </div>
      <button>Learn More</button>
    </div>
  );
};

export default Article;
