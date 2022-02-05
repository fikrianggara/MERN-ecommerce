import React from 'react';
import styled from 'styled-components';
import {Instagram, Facebook, Twitter, Email} from '@mui/icons-material';
const Container = styled.div.attrs({
  className:'bg-white p-8 md:p-4 flex flex-col md:flex-row shadow-y-lg'
})``;
const Left = styled.div.attrs({
  className:'flex-1 text-start md:text-center'
})``;
const Logo = styled.h1.attrs({
  className:'font-bold text-green-800 text-xl'
})``;
const Description = styled.div.attrs({
  className:'py-2 font-medium mt-3'
})``;
const Center = styled.div.attrs({
  className:'mt-4 md:mt-0 flex-1'
})``;
const Right = styled.div.attrs({
  className:'mt-4 md:mt-0 flex-1'
})``;
const SocialContainer = styled.div.attrs({
  className:'flex justify-evenly md:justify-center items-center text-white'
})``;
const IconContainer = styled.div.attrs({
  className:'rounded-full h-10 w-10 flex items-center justify-center m-2'
})``;
const List = styled.ul.attrs({
  className:'leading-8'
})``;
const Item = styled.li.attrs({
  className:''
})``;
const ItemLink = styled.a.attrs({
    className:'hover:text-green-500 hover:cursor-pointer'
})``;
const Template = styled.div.attrs({
  className:''
})``;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>CLOTHES-COMMERCE</Logo>
              <Description>Your Best Choice for Clothing</Description>
              <Description>Follow Us</Description>
              <SocialContainer>
                  <IconContainer className='bg-pink-600'>
                    <a href="https://www.instagram.com/fikri_septrian_anggara/"><Instagram ></Instagram></a>
                  </IconContainer>
                  <IconContainer className='bg-blue-800'>
                    <a href="https://www.facebook.com/fikri.s.anggara">
                  <Facebook ></Facebook>
                    </a>
                  </IconContainer>
                  <IconContainer className='bg-cyan-500'>
                    <a href="" onClick={()=>window.open('https://twitter.com/Fikri_S_A')}>
                        <Twitter ></Twitter>
                    </a>
                  </IconContainer >
                  <IconContainer className='bg-red-500'>
                    <a href="">
                      <Email ></Email>
                    </a>
                  </IconContainer>
              </SocialContainer>
          </Left>
          <Center>
              <Description>Product</Description>
              <List>
                    <Item><ItemLink>Kaos</ItemLink></Item>
                    <Item><ItemLink>Kemeja</ItemLink></Item>
                    <Item><ItemLink>Sepatu</ItemLink></Item>
                    <Item><ItemLink>Sendal</ItemLink></Item>
                    <Item><ItemLink>Setelan</ItemLink></Item>
                    <Item><ItemLink>Sweater</ItemLink></Item>
                    <Item><ItemLink>Piyama</ItemLink></Item>
                    <Item><ItemLink>Aksesoris</ItemLink></Item>
              </List>
          </Center>
          <Right>
              <Description>Contact</Description>
              <List>
                    <Item>Jalan jalan ke pasar rebo no 13 rt 17</Item>
                    <Item>Jatinegara, Jakarta Timur (13330)</Item>
                    <Item>+62-1234-5678-9101</Item>
              </List>
              <Description className='mt-4'>Supported Payment</Description>
              <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="supported payment" />
          </Right>
      </Container>
  );
};

export default Footer;
