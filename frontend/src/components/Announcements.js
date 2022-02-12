import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {useState} from 'react';

const Container = styled.div.attrs({
  className:' p-2 bg-teal-800 flex justify-between'
})``;
const Description = styled.div.attrs({
  className:'text-teal-500 font-medium text-sm'
})``;
const CloseAnnouncement = styled.div.attrs({
  className:'text-white font-medium text-sm hover:cursor-pointer mr-4'
})``;
const Announcements = () => {
  const [show, setShow] = useState(true);
  const unmount = ()=>{
    setShow(!show);
  }
  if(show){
    return (
    <Container onClick={unmount}>
      <Description>Diskon 12.12 akan segera hadir!</Description>
      <CloseAnnouncement>X</CloseAnnouncement>
    </Container>
    );
  } else{
    return(
      <></>
    );
  }
    
};

export default Announcements;
