import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className:'text-5xl flex items-center justify-center h-screen'
})``;
const Message = styled.div.attrs({
    className:'text-green-700 m-auto font-bold'
})``;
const NotFound = () => {
  return (
      <Container>
          <Message>Ups, Page Not Found!</Message>
      </Container>
  );
};

export default NotFound;
