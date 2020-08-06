import React, { useState } from "react";
import "../../../styles/ShoppingCart.css";

function ShoppingCart() {
  const [productCart, setproductCart] = useState([
    {
      id: 1,
      descripction:
        "Zapatillas deportivas transpirables a la moda para hombre y mujer",
      precioLista: "$ 20.000",
      precioOferta: "$ 16.000",
      img:
        "https://ae01.alicdn.com/kf/H3620730f0f8a4bb4906188289e7a4baao.jpg_220x220q90.jpg_.webp",
    },
    {
      id: 2,
      descripction: "Valstone zapatillas deportivas transpirables para hombre",
      precioLista: "$ 50.000",
      precioOferta: "$ 35.000",
      img:
        "https://ae01.alicdn.com/kf/Hbee625d389f04f0a9b6e57586ca9df80J.jpg_220x220q90.jpg_.webp",
    },
    {
      id: 3,
      descripction:
        "Gafas de sol graduadas con Clip magnético progresivo para hombres",
      precioLista: "$ 60.000",
      precioOferta: "$ 15.000",
      img:
        "https://ae01.alicdn.com/kf/H05b2cb1ea7374285ae6b15ad703e05d3Z.jpg_220x220q90.jpg_.webp",
    },
  ]);

  const prodcart = () => {
    return productCart.map((prod) => (
      <div>
        <div className="listProductos">
          <div>
            <input type="checkbox" />
          </div>
          <img className="imagenProducto" src={prod.img} />
          <div className="descripconPrecio">
            <p>{prod.descripction}</p>
            <div className="precioDescuento">
              <p className="precioNormal">{prod.precioLista}</p>
              <p className="descuento">{prod.precioOferta}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return <div className="productosAgregados">{prodcart()}</div>;
}

export default ShoppingCart;
