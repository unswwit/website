//All necessary imports for this javascript
import React, { useEffect, useState } from "react";
import ".././marketingArchive.css";
import "./content.css";
import "../.././style.css";
import PageHeader from "../.././header";
import Chip from "@material-ui/core/Chip";
import Initiative from "./Initiative";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tabletop from "tabletop";

const MarketingContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = {
    "All": "", 
    "Careers Guide": "careers", 
    "Mascot": "mascot", 
    "Memes": "memes", 
    "Monday Motivation": "monday", 
    "WIT Crush Wednesday": "wcw",
  };

  useEffect(() => {
    Tabletop.init({
      key: process.env.REACT_APP_GOOGLE_SHEETS,
      callback: googleData => {   
        setLoading(false);   
        setContent(googleData["marketing-archives"]["elements"]);
      },
      simpleSheet: false
    });
  },[selectedCategory]);

  return (
    <>
      {/* Cover Photo */}
      <PageHeader imgUrl="/headers/marketing-header.png" title="Marketing Archives" />
      {/*End of Header*/}

      <div id="parent">
        {/*List of initiatives*/}
        <div className="initiatives">
          {/* Start of categories */}      
          <div className="contentCategories">
            {Object.keys(categories).sort().map((category) => {
              const chipColour = selectedCategory === categories[category] ? "#e85f5c": "#7F7F7F";
              return <Chip 
                key={category}
                size="medium" 
                label={category} 
                style={{
                  textTransform: "uppercase",
                  backgroundColor: chipColour, 
                  color: "white",
                  margin: "5px",  
                }}
                onClick={() => {
                  setLoading(true);
                  setSelectedCategory(categories[category]);                
                }}
              />                
            })}
          </div>  

          <div id="contentLoadingContainer">
            {loading && <CircularProgress
              variant="indeterminate"
              size={50}
              thickness={5}
              id="contentLoading"
            />}
          </div>
        
          {/*Image collage*/}
          {!loading && <ol className="grid" id="content"> 
            {content
              .filter((picture) => selectedCategory === "All" || picture.category === selectedCategory)
              .map((content, index) => {   
                return <Initiative
                  key={index}
                  fb={content.link}
                  imgUrl={selectedCategory === "All" ? 
                    `/initiatives/${content.category}/${content.img}`: 
                    `/initiatives/${selectedCategory}/${content.img}`
                  }
                  alt={content.label}
                  date={content.date} 
                />
              })}
          </ol>}   
        </div>
        {/*End of Initiatives*/}
      </div>
    </>
  );
}
export default MarketingContent;
