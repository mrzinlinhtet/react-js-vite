import React from "react";
import About from "./About";

const Home = (props) => {
  console.log(props);
  return (
    <>
      <h4>
        Home page {props.name} - {props.age}
      </h4>
      <h5>{props.info.name} - {props.info.age} - {props.info.gender}</h5>
      <p className="text-primary">Mingalar pr mate sway...</p>
      <About />
    </>
  );
};

export default Home;
