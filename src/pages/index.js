import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body/Body'
import Header from '../components/Header/header'
import Navigation from '../components/Navigation/Navigation'

const HeaderWrapper = styled.div`
  text-align: center;
`
const IndexPage = () => (
  <Body>
    <HeaderWrapper>
      <Header>Roman Numerals Converter</Header>
    </HeaderWrapper>
    <Navigation />
  </Body>

)

export default IndexPage
