import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {categoriesItems} from '../data';

const Container = styled.div.attrs({
  className:'my-8 w-4/5 md:h-[400px] mx-auto rounded-xl relative md:shadow-xl'
})`
`;
const Wrapper = styled.div.attrs({
  className:'w-full h-full flex p-4 rounded-xl flex-col md:flex-row'
})`
`;

const CategoriesItem = styled.div.attrs({
    className:'relative bg-gray-500 h-full w-full flex-1 mb-2 md:m-2 flex items-end justify-center rounded-lg hover:gray-scale-50'
})`
&:hover{
  background:black;
}`;
const DescContainer = styled.div.attrs({
  className:'absolute z-10 md:text-4xl text-gray-100 flexs-row items-center text-center leading-loose'
})``;
const ImageContainer = styled.div.attrs({
  className:'w-full h-full object-top'
})``;
const CategoryTitle = styled.h1.attrs({
  className:'flex-1 font-medium tracking-widest text-4xl my-5 lg:text-5xl text-gray-100'
})``;
const CategoryButton =styled.button.attrs({
  className:'flex-1 mt-0 mt-5 text-xl lg:text-3xl md:mb-8 text-teal-600 opacity-80 bg-white md:hover:outline backdrop-blur-sm md:hover:outline-2 duration-300 ease-in p-2 lg:p-4 rounded-t-lg md:rounded-lg'
})``;
const CategoryImg = styled.img.attrs({
  className:'w-full h-full rounded-lg object-cover duration-300 ease-in-out opacity-80'
})``;

const Categories = () => {
    return (
    <Container>
      <Wrapper>
          {categoriesItems.map(item=> (
        <CategoriesItem key={item.id}>
            <DescContainer>
                <CategoryTitle >{item.title}</CategoryTitle>
                <CategoryButton >explore</CategoryButton>
            </DescContainer>
            <ImageContainer url={item.src}>
                <CategoryImg src={item.src} alt={item.desc} />
            </ImageContainer>
        </CategoriesItem>
        ))}
      </Wrapper>     
    </Container>
  );
};

export default Categories;
