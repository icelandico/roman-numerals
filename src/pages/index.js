import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/header'
import NavigationContainer from '../components/Navigation/Navigation';

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
    <NavigationContainer />
    </StyledBanner>
  </>

)

export default IndexPage
