import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body/Body'
import MainPanel from '../components/MainPanel/MainPanel'
import Navigation from '../components/Navigation/Navigation'

const Line = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  width: 15%;
`

const Converter = () => {
  return (
    <Body>
      <Navigation />
      <Line />
      <MainPanel />
    </Body>
  )
}

export default Converter
