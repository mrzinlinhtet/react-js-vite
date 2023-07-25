import React from "react";
import "./App.css";

const App = () => {
  const arr = ['1','2','3'];
  return (
    <div>
      {arr.map((item) => (
        <div className="card">
          <img
            src="https://th.bing.com/th/id/OIP.Gr7hcjTcqf6vnQBkv0kfbgHaFj?pid=ImgDet&rs=1"
            alt=""
            width="200px"
          />
          <h1 className="heading">Card</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, in.
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
