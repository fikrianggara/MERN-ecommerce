import React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {homePageProducts,productPageProducts} from '../data';
import Product from './Product';

const Container = styled.div.attrs({
  className:'md:w-4/5 m-auto px-3 mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'
})``;


const Products = ({Page}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        switch(Page){
        case 'Home':
            setData(homePageProducts);
            break;
        case 'ProductList':
            setData(productPageProducts);
            break;
        default:
            setData([]);
    }
}, [Page]);
  return (
      <Container>
        {data.map(product=>( 
            <Product item={product} key={product.id+''+product.category}></Product>
      ))}
      </Container>
      
  );
};

export default Products;
