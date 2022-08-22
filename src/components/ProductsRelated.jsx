import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import CardProductRelated from './CardProductRelated'

const ProductsRelated = ({product}) => {
    const products = useSelector(state => state.productsCrud)
    const related = []
    const filter = products.map(element =>{
        if(element.category.name == product.category){
            related.push(element)
        }
    })
    // console.log(related)
    console.log(products)
    // console.log(product)
    return (
        <div className='productInfoR mt-2'>
            {related.map(element => (
                <CardProductRelated product={element} key={element.id}/>
            ))}
            
            
        </div>
    );
};

export default ProductsRelated;