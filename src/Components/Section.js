import React from "react";
import Nav from "./Nav";

const Section = (props) => {
  return (
    <div className="section">
      {props.data.map((item) => {
        // console.log(item);
        return <Nav category={item.category} images={item.images} />;
      })}
    </div>
  );
};

export default Section;
