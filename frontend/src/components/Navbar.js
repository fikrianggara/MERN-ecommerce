import styled from 'styled-components';
// import tw from "twin.macro";
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const Container = styled.div.attrs({
    className:"shadow-md shadow-grey-200" 
})``

const Wrapper = styled.div.attrs({
  className:'p-2 flex-row md:flex justify-between items-center md:text-lg'
})``;
const Left = styled.div.attrs({
  className: 'p-2 flex-1'
})``;
const Center = styled.div.attrs({
  className: 'p-2 flex flex-1 items-center md:justify-end justify-center'
})``;
const Right = styled.div.attrs({
  className: 'p-2 flex-1 flex justify-evenly'
})``;
const Logo = styled.h1.attrs({
  className:'logo text-center font-bold text-teal-800 text-4xl'
})``;
const Language = styled.div.attrs({
  className: 'md:text-right hover:cursor-pointer flex-1/3 ml-6 mr-8'
})``;
const SearchContainer = styled.div.attrs({
  className: 'bg-gray-200 flex rounded justify-evenly flex-2/3 border border-gray-500 focus:border-teal-200'
})``;
const Input = styled.input.attrs({
  className:'focus:outline-none bg-gray-200 mx-2 font-medium',
  placeholder:'kaos, sepatu pria, kemeja',
})``;
const MenuItem = styled.div.attrs({
  className:''
})``;

const Navbar = () => {
  return <Container>
    <Wrapper>
      <Left>
        <a href="/">
        <Logo>
        ZORO</Logo></a></Left>
      <Center>
        <Language>
          IND
        </Language>
        <SearchContainer>
          <Input></Input>
          <Search className='hover:cursor-pointer rounded-r text-xl'/>
        </SearchContainer>
      </Center>
      
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="success">
            <ShoppingCartOutlined color="action" />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>;
};

export default Navbar;
