import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {FavoriteBorderOutlined, ShoppingCartOutlined, SearchOutlined} from '@mui/icons-material';

const ProductItem = styled.div.attrs({
  className:' w-full h-full bg-cover flex rounded-lg transition hover:cursor-pointer'
})`background-image:url('${props=>props.product.src}')`;
const Action = styled.div.attrs({
  className:'z-10 absolute flex flex-col p-2 md:p-4 h-1/2 bottom-0 transition right-0 md:p-4 text-gray-600 bg-white opacity-50 justify-between lg:justify-evenly rounded-lg rounded-tr-none md:rounded-bl-none'
})``;
const Container = styled.div.attrs({
  className:'relative rounded-lg w-full aspect-[3/4] shadow-lg flex'
})`
    background:black;
&:hover{
    transition: all 0.3s ease-in-out
}
&:hover ${ProductItem}{
    transition: all 0.5s ease-in-out;
    opacity:0.6;
}
&:hover ${Action}{
    transition: all 0.5s ease-in-out;
    opacity:1;
}
`;

// 

const Icon = styled.div.attrs({
    className:'hover:cursor-pointer hover:text-teal-600 md:m-2 duration-300 ease-in-out'
})``;

const Product = (props) => {
  const routeToDetail = (product)=>{
    window.location=`/product/${product.category}/${product.id}`;
  } 
  return (
        <Container onClick={()=>routeToDetail(props.item)}>
            <ProductItem product={props.item}>
            </ProductItem>
            <Action>
                <Icon onClick={()=>routeToDetail(props.item)}>
                    <SearchOutlined></SearchOutlined>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined></FavoriteBorderOutlined>
                </Icon>
                <Icon>
                    <ShoppingCartOutlined></ShoppingCartOutlined>
                </Icon>
            </Action>
        </Container>
  );
};

export default Product;
