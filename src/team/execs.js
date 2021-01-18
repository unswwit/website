import React from "react";
import "../style.css";
import "./team.css";

const Execs = (props) => {
  const socials = {
    linkedin: "https://www.linkedin.com/in/" + props.linkedin + "/",
    facebook: "https://www.facebook.com/" + props.fb,
    email: "mailto:" + props.email
  }

  return (
    <div className="exec_col">
      <div className="profile">
        <div>
          {props.imgUrl && <div className="profile_crop">
            <img
              src={process.env.PUBLIC_URL + props.imgUrl}
              className={"profile_img " + props.className}
              alt={props.name}
            />
          </div>}
          <div className="profile_details">
            <p className="profile_text_name">{props.name}</p>
            <p className="profile_text_position">{props.position}</p>
            {props.degree && <p className="profile_degree">
              {props.degree}
              {props.year && ", " + props.year + " year"}
            </p>}
            {props.linkedin && <div className="icon_bar">
              {Object.keys(socials).map((social) => {
                return (
                  <a
                    href={socials[social]}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social}
                  >
                    <img
                      className="icon"
                      src={`${process.env.PUBLIC_URL}/icons/${social}.png`}
                      alt={social}
                    />
                  </a>
                )
              })}
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Execs;
