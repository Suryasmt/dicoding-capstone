import React from "react";
// import axios from "axios";

const Article = (props) => {
  return (
    <div className="card-article">
      <div className="img-thumb">
        <img src={props.images} alt={props.alt} />
      </div>
      <div className="article-text">
        <p className="article-text__title">{props.title}</p>
        <p className="article-text__desc">{props.desc}</p>
      </div>
      <button><a href={props.url} >Learn More</a></button>
    </div>
  );
};

export default Article;
