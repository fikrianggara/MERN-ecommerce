import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {} from '@mui/icons-material';

const Container = styled.div.attrs({
  className:'my-8 w-4/5 mx-auto bg-green-200 rounded-xl'
})``;
const ImgContainer = styled.img.attrs({
    className:'object-cover w-full h-[300px] object-top rounded-xl',
    src:'./assets/ads/Google-Ads.jpg',
    alt:'ini iklan'
})``;
const Template = styled.div.attrs({
  className:''
})``;

function HeroCarousel() {
  return (
    <Container>
        <ImgContainer></ImgContainer>
    </Container>
  );
}

export default HeroCarousel;
