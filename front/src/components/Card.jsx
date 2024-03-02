import React from 'react';
import Button from 'react-bootstrap/Button';

const Card = ({product}) => {
    return (
        <div class="card" style="width: 100%">
            <Button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="LIKE ME">
            Agregame a tus FAVORITOS
            </Button>
            <h5 class="card-title">{product.title}</h5>
            <img src={product.image} class="card-img-top" alt={product.title}/> 
            <div class="card-body">
            <p class="card-text">{product.description}</p>
            </div>
            <div class="card-body1">
            <p class="card-text2">{product.price}</p>
            </div>
            <div class="card-body1">
            <p class="card-text2">{product.stock}</p>
            </div>
        </div>
    )
};

export default Card;
