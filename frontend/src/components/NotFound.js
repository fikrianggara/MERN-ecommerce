import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
    className:'text-5xl flex flex-col items-center justify-evenly h-screen'
})``;
const Message = styled.div.attrs({
    className:'text-teal-700 font-bold'
})``;
const Redirect = styled.a.attrs({
    className:'text-teal-500 text-xl underline-offset-2 underline',
    href:'/'
})``;
const NotFound = () => {
  return (
      <Container>
          <Message>Ups, Page Not Found!</Message>
            <Redirect>back to homepage</Redirect>
      </Container>
  );
};

export default NotFound;
