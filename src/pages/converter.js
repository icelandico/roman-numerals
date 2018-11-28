import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header/header'
import { Link } from 'gatsby'
import MainPanel from '../components/MainPanel/MainPanel'

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
`;

const ButtonContainer = styled.div`
margin-top: 2rem;
`;

const StyledLink = styled(Link)`
text-decoration: none;
color: #5F5293;
`;

class Converter extends Component {
  render() {
    return (
      <StyledBody>
      <HeaderWrapper>
        <Header>Type a number here</Header>
      </HeaderWrapper>
      <MainPanel />
      <ButtonContainer>
        <StyledLink to={'/'}>Go back</StyledLink>
      </ButtonContainer>
    </StyledBody>
    )
  }
}

export default Converter
