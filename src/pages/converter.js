import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body/Body'
import Header from '../components/Header/header'
import MainPanel from '../components/MainPanel/MainPanel'
import Navigation from '../components/Navigation/Navigation'

const HeaderWrapper = styled.div`
  text-align: center;
`;

const Converter = () => {
    return (
      <Body>
        <HeaderWrapper>
          <Header>Type a number here</Header>
        </HeaderWrapper>
        <MainPanel />
        <Navigation />
      </Body>
  )
}

export default Converter
