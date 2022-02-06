import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {FavoriteBorderOutlined, ShoppingCartOutlined, SearchOutlined} from '@mui/icons-material';

const ProductItem = styled.div.attrs({
  className:' w-full h-full bg-cover flex rounded-lg'
})`background-image:url('${props=>props.product.src}')`;
const Action = styled.div.attrs({
  className:'z-10 absolute flex flex-col p-2 md:p-4 h-1/2 bottom-0 right-0 md:p-0 text-gray-600 bg-white opacity-80 md:opacity-60 justify-between lg:justify-evenly rounded-lg rounded-tr-none md:rounded-bl-none'
})``;
const Container = styled.div.attrs({
  className:'relative rounded-lg w-full aspect-[3/4] shadow-lg flex'
})`
&:hover{
    background:black;
}
&:hover ${ProductItem}{
    opacity:0.6;
}
&:hover ${Action}{
    opacity:0.8;
}
`;

// 

const Icon = styled.div.attrs({
    className:'hover:cursor-pointer hover:text-green-600 md:m-2'
})``;
const Template = styled.div.attrs({
  className:''
})``;
const Product = (props) => {
  return (
        <Container>
            <ProductItem product={props.item}>
            </ProductItem>
            <Action>
                <Icon>
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
