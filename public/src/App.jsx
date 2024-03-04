import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../src/assets/appcenter.png";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #131324;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
`;

const BrandLogo = styled.img`
  width: 100px; 
  height: auto;
  margin-right: 10px;
`;

const BrandName = styled.h1`
  color: white;
  font-size: 4.0rem; 
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; 
`;

const StyledLink = styled(Link)`
  background-color: #997af0;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.4rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #4e0eff;
  }
`;

function App() {
  return (
    <Container>
      <Brand>
        <BrandLogo src={Logo} alt="Logo" />
        <BrandName>connect</BrandName>
      </Brand>
      <LinksContainer>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </LinksContainer>
    </Container>
  );
}

export default App;
