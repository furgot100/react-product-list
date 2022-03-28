import React from 'react'
import './productList.css'
import Product from './product'
import data from './data'

function ProductList(props) {
    const {category} = props
    return (
        <div className='ProductList'>
            {data.filter(obj => obj.category === category || category === 'All').map(obj => {
                const {name, description, price, objCategory} = obj
                return(
                    <Product
                    name={name}
                    description={description}
                    price={price}
                    category={objCategory}
                    />
                )
            })}
        </div>
    )
}

export default ProductList