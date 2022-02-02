import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {ArrowLeft, ArrowRight} from '@mui/icons-material';

const Container = styled.div.attrs({
  className:'my-8 w-4/5 mx-auto bg-green-200 rounded-xl relative'
})``;

const ArrowContainerLeft = styled.div.attrs({
  className: `opacity-50 hover:opacity-100 duration-150 ease-in hover:cursor-pointer hover:text-blue-800 mx-2 z-10 absolute flex top-0 bottom-0 left-1 m-auto items-center justify-center text-xl text-grey-200 w-[40px] h-[40px] bg-white rounded-[50%] text-blue-500`
})``;
const ArrowContainerRight = styled.div.attrs({
  className:`opacity-50 hover:opacity-100 duration-150 ease-in hover:cursor-pointer hover:text-blue-800 mx-2 z-10 absolute flex top-0 bottom-0 right-1 m-auto items-center justify-center text-xl text-grey-200 w-[40px] h-[40px] bg-white rounded-[50%] text-blue-500`
})``;
const Wrapper = styled.div.attrs({
  className:'flex overflow-hidden'
})``;
const Slide = styled.div.attrs({
  className:'flex relative grow w-96'
})``;
const TitleContainer = styled.div.attrs({
  className:'absolute top-10 left-24 text-5xl font-medium text-gray-200 tracking-widest opacity-80'
})``;
const ImgContainer = styled.img.attrs({
    className:'object-cover h-[400px] object-top rounded-xl w-full',
    src:'./assets/shirt.jpg',
    alt:'ini kemeja'
})``;
const ShopButton = styled.button.attrs({
  className:'absolute bottom-10 right-24 text-xl font-medium opacity-30 hover:opacity-80 hover:cursor-pointer duration-150 ease-in text-green-800 bg-green-200 p-4 rounded-lg'
})``;

const Template = styled.div.attrs({
  className:''
})``;

const HeroCarousel = () => {
    return (
    <Container>
      <ArrowContainerLeft>
        <ArrowLeft/>
      </ArrowContainerLeft>
      <Wrapper>
        <Slide>
          <TitleContainer>
            <h1>SHIRT</h1>
          </TitleContainer>
          <ImgContainer/>
          <ShopButton><h1>Shop Now</h1></ShopButton>
        </Slide>
        <Slide>
          <TitleContainer>
            <h1>SHIRT</h1>
          </TitleContainer>
          <ImgContainer/>
          <ShopButton><h1>Shop Now</h1></ShopButton>
        </Slide> 
        {/* <Slide>
          <TitleContainer>
            <h1>SHIRT</h1>
          </TitleContainer>
          <ImgContainer/>
          <ShopButton><h1>Shop Now</h1></ShopButton>
        </Slide>
        <Slide>
          <TitleContainer>
            <h1>SHIRT</h1>
          </TitleContainer>
          <ImgContainer/>
          <ShopButton><h1>Shop Now</h1></ShopButton>
        </Slide>  */}
      </Wrapper>
      <ArrowContainerRight >
        <ArrowRight/>
      </ArrowContainerRight>
        
    </Container>
  );
};

export default HeroCarousel;
