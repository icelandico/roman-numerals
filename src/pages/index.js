import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Header from '../components/Header/header'

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #201858;
  color: #847EB1;
  text-decoration: none;
  `;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

`


const IndexPage = () => (
  <>
    <StyledBanner>
      <HeaderWrapper>
        <Header>Roman Numerals Converter</Header>
      </HeaderWrapper>
      <StyledLink to="/converter/">Go to converter</StyledLink>
      <StyledLink to="/about/">Go to about page</StyledLink>
    </StyledBanner>
  </>

)

export default IndexPage
