import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";

const Article = (props) => {
  return (
    <div className="artikel-card">
      <img className="artikel-gbr" src={props.images} alt={props.alt} />
      <header className='artikel-card_header'>
        <div className="">
          <h3 className="artikel-judul2">{props.title}</h3>
          <p className="artikel-text2">{props.desc}</p>
        </div>
        <div className="center"><a className="artikel-learn-more" href={props.url} >Learn More</a></div>
      </header>
    </div>
  );
};

export default Article;
