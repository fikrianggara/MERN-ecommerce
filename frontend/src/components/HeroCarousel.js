import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {ArrowLeft, ArrowRight} from '@mui/icons-material';
import {sliderItems} from '../data';

const Container = styled.div.attrs({
  className:'my-8 w-4/5 h-[400px] mx-auto rounded-xl relative'
})``;

const ArrowContainerLeft = styled.div.attrs({
  className: `opacity-50 hover:opacity-100 duration-150 ease-in hover:cursor-pointer hover:text-blue-800 mx-2 z-10 absolute flex top-0 bottom-0 left-1 m-auto items-center justify-center text-xl text-grey-200 w-[40px] h-[40px] bg-white rounded-[50%] text-blue-500`
})``;
const ArrowContainerRight = styled.div.attrs({
  className:`opacity-50 hover:opacity-100 duration-150 ease-in hover:cursor-pointer hover:text-blue-800 mx-2 z-10 absolute flex top-0 bottom-0 right-1 m-auto items-center justify-center text-xl text-grey-200 w-[40px] h-[40px] bg-white rounded-[50%] text-blue-500`
})``;
const Wrapper = styled.div.attrs({
  className:'snap-x w-full h-full flex overflow-x-hidden flex-col flex-wrap'
})``;
// const x = `100%`;
const Slide = styled.div.attrs({
  className:'snap-center duration-1000 ease-in-out flex relative w-full h-full'
})`
transform:translateX(${props=>props.slideIndex*-100}%)`;
const TitleContainer = styled.div.attrs({
  className:'absolute top-5 text-xl md:text-5xl left-10 md:left-24 md:top-10 font-medium tracking-widest opacity-80'
})``;
const ImgContainer = styled.div.attrs({
    className:'w-full h-full',
})``;
const ShopButton = styled.button.attrs({
  className:'absolute bottom-5 right-10 md:right-24 md:bottom-10 md:text-xl text-sm font-medium md:opacity-60 md:hover:opacity-100 opacity-100 hover:cursor-pointer duration-150 ease-in text-green-800 bg-slate-200 p-4 rounded-lg'
})``;

const Template = styled.div.attrs({
  className:''
})``;



const HeroCarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const itemLength = sliderItems.length;
  const handleArrowClick = (direction)=>{
        if(direction==='left'){
          if(slideIndex===0){
            setSlideIndex(itemLength-1)
          }else{
            setSlideIndex(slideIndex-1);
          }
        } else {
          if(slideIndex===itemLength-1){
            setSlideIndex(0);
          }else{
            setSlideIndex(slideIndex+1);
          }
        }
    }
    return (
    <Container>
      <ArrowContainerLeft onClick={()=>handleArrowClick('left')}>
        <ArrowLeft/>
      </ArrowContainerLeft>
      <Wrapper >
        {sliderItems.map(item=> (
          <Slide key={item.id} slideIndex={slideIndex}>
          <TitleContainer>
            <pre className={item.textColor}>{item.title}</pre>
          </TitleContainer>
          <ImgContainer>
            <img className='object-cover rounded-xl w-full h-full' src={item.src} alt={item.alt} />
          </ImgContainer>
          <ShopButton><h1>Shop Now</h1></ShopButton>
          </Slide>
        ))}
      </Wrapper>
      <ArrowContainerRight onClick={()=>handleArrowClick('right')}>
        <ArrowRight/>
      </ArrowContainerRight>
        
    </Container>
  );
};

export default HeroCarousel;
