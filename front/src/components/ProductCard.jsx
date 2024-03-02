// src/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.url_imagen} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.descripcion}</p>
        <p className="card-text">Valor: ${product.valor}</p>
        <p className="card-text">Stock: {product.stock}</p>
      </div>
    </div>
  );
}

export default ProductCard;