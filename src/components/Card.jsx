import React from "react";

const Card = ({product}) => {
  // console.log(props);
  return (
    <div className="card p-5" style={{ width: "18rem" }}>
      <img src={product.images[1]} height="100px" alt="" />
      <div className="card-body">
        <h4 className="card-title text-truncate text-primary small">
          {product.title}
        </h4>
        <p className="card-text text-secondary text-truncate small">
          {product.description}
        </p>
      </div>
      <button className="btn btn-success">Add to Cart</button>
    </div>
  );
};

export default Card;
