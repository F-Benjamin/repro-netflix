import React from "react";
import Film from "./Film";

const Nav = ({ category, images }) => {
  return (
    <>
      <p className="title">{category}</p>
      <div className="list">
        {images.map((item) => {
          //   console.log(item);
          return <Film images={item} />;
        })}
      </div>
    </>
  );
};

export default Nav;
