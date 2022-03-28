import React from "react";

function Product(props) {

    const {name, description, price, category} = props

    return (
        <div className='ProductContainer'>
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
                <p>{price}</p>
            </div>
            <small>Category: {category}</small>
        </div>
    )
}

export default Product