import React, { Component } from 'react'
import styled from 'styled-components'
import Body from '../components/Body/Body'
import Header from '../components/Header/header'
import { Link } from 'gatsby'
import MainPanel from '../components/MainPanel/MainPanel'

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

const Converter = () => {
    return (
      <Body>
      <HeaderWrapper>
        <Header>Type a number here</Header>
      </HeaderWrapper>
      <MainPanel />
      <ButtonContainer>
        <StyledLink to={'/'}>Go back</StyledLink>
      </ButtonContainer>
    </Body>
  )
}

export default Converter
