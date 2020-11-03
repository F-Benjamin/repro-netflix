import React from "react";

const Film = (props) => {
  console.log(props);
  return <img src={props.images} alt="movie" />;
};

export default Film;
