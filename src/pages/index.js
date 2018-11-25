import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/header'
import Navigation from '../components/Navigation/Navigation'

const StyledBody = styled.div`
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
  `;

const HeaderWrapper = styled.div`
  text-align: center;
`

const IndexPage = () => (
  <>
    <StyledBody>
      <HeaderWrapper>
        <Header>Roman Numerals Converter</Header>
      </HeaderWrapper>
      <Navigation />
    </StyledBody>
  </>

)

export default IndexPage
