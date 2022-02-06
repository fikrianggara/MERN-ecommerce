import React from 'react';
import styled from 'styled-components';
// import tw from "twin.macro";
import {} from '@mui/icons-material';

const Container = styled.div.attrs({
  className:' p-1 bg-green-500'
})``;
const Description = styled.div.attrs({
  className:'text-green-800 font-medium text-sm'
})``;

const Announcements = () => {
    return (
    <Container>
      <Description>Diskon 12.12 akan segera hadir!</Description>
    </Container>
  );
};

export default Announcements;
