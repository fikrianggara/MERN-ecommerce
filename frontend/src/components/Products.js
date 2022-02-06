import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {homePageProducts} from '../data';
import Product from './Product';

const Container = styled.div.attrs({
  className:'md:w-4/5 m-auto px-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'
})``;

const Template = styled.div.attrs({
  className:''
})``;
const Products = () => {
  return (
      <Container>
    {homePageProducts.map(product=>( 
            <Product item={product} key={product.id+''+product.category}></Product>
      ))}
      </Container>
      
  );
};

export default Products;
