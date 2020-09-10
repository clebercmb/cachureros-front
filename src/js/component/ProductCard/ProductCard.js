import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  function handleProduct(prod) {
    prod["amount"] = 1;
    props.addProduct(prod);
  }

  console.log(">>>ProductCard.props.editProduct=", props.editProduct);
  return (
    <div key={props.prod.id} className="col-md-3">
      <div className="card mt-3 mb-3 ml-2  mr-2 p-2">
        <Link to={"/product-view/" + props.prod.id}>
          <img
            src={props.urlImages + props.prod.photos[0]}
            className="card-img-top"
            alt="..."
          />
        </Link>

        <div className="card-body">
          <h5 className="card-title mt-1">{props.prod.name}</h5>
          <p className="card-text">{props.prod.price}</p>
          <div className="product-card-buttons">
            {!!props.addProduct && (
              <button
                className="button-blue-product-card"
                onClick={(e) => handleProduct(props.prod)}
              >
                Agregar
              </button>
            )}
            {!!props.editProduct && (
              <button
                className="button-blue-product-card"
                onClick={(e) => props.editProduct(props.prod)}
              >
                Editar
              </button>
            )}
            {!!props.removeProduct && (
              <button
                className="button-blue-product-card"
                onClick={(e) => props.removeProduct(props.prod)}
              >
                Remover
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
