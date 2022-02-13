import React from 'react';
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import {productPageProducts} from '../data';
import {ShoppingCartOutlined} from '@mui/icons-material';
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import SelectionOption from "../components/SelectionOption";
import Footer from "../components/Footer";
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
  className:'w-4/5 mx-auto'
})``;
const Title = styled.div.attrs({
  className:'text-3xl md:text-5xl text-teal-800 text-center my-8 md:my-8'
})``;
const ProductDetail = styled.div.attrs({
  className:'flex flex-col md:flex-row my-4 md:my-8 border border-1 md:border-2 p-4 md:p-8'
})``;
const ImageContainer = styled.div.attrs({
  className:'md:w-2/3 max-h-screen flex flex-col md:flex-row justify-center gap-2 md:gap-x-2'
})``;
const Image = styled.img.attrs({
  className:'object-cover aspect-square h-[200px] md:h-[400px] w-full md:w-1/2 object-top hover:opacity-80 transition duration-300'
})`
src:'${props=>props.src}';
alt:'${props=>props.alt}';
object-position:${props=>props.first?'top':'bottom'}
`;
const DetailContainer = styled.div.attrs({
  className:'md:w-1/3 p-4 md:p-8'
})``;
const DescriptionContainer = styled.div.attrs({
  className:'normal-case text-lg md:text-2xl p-8'
})``;
const Category = styled.div.attrs({
  className:'text-lg md:text-2xl font-medium'
})``;
const Price = styled.div.attrs({
  className:'text-lg md:text-2xl'
})``;
const AddToCartButton = styled.button.attrs({
  className:'w-full bg-teal-800 text-gray-100 p-2 md:p-4 rounded-md mt-4'
})``;
const ProductDetails = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    useEffect(()=>{
      setData(productPageProducts.find(item=>item.id===id))
    }, [id]);
    return (
    <div>
    <Announcements></Announcements>
    <Navbar></Navbar>
        <Wrapper>
          <Title>{data.name}</Title>
          <ProductDetail>
            <ImageContainer>
              <Image src={`../../${data.src}`} alt={data.alt} first={true}></Image>
              <Image src={`../../${data.src}`} alt={data.alt} first={false}></Image>
            </ImageContainer>
            <DetailContainer>
              <Category>
                {data.category}
              </Category>
              <Price>
                {data.price}
              </Price>
              <SelectionOption options={data.size}></SelectionOption>
              <AddToCartButton>Add To Cart
                <ShoppingCartOutlined className='ml-2 md:ml-4'></ShoppingCartOutlined>
              </AddToCartButton>
            </DetailContainer>
          </ProductDetail>
          <DescriptionContainer>
            {data.description}
          </DescriptionContainer>
        </Wrapper>
    <Footer></Footer>
    </div>
    )
}

export default ProductDetails