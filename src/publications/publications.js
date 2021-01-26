import React, { useEffect, useState } from "react";
import "./publications.css";
import PubArticle from "./publications-article";
import PageHeader from ".././header";
import Tabletop from "tabletop";

const Publications = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {
        setArticles(googleData["publications"]["elements"]);  
      },
      simpleSheet: false
    })
  }, []);

  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/publications-header.png" title="Publications" />

      <div className="publicationsBody">
        {/*2020 articles*/}

        <h1>2020</h1>
        <div className="row">
          {articles.map((article) => <PubArticle
            imgUrl={`./publications/${article.img}`}
            heading={article.heading}
            date={article.date}
            url={article.url}
          />
          )}          
        </div>
      </div>
    </>
  );
}

export default Publications;
