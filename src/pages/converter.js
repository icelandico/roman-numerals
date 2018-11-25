import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/header'
import Input from '../components/Input/Input'
import { Link } from 'gatsby'

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5F5293;
`

const Converter = () => (
  <>
    <StyledBody>
      <HeaderWrapper>
        <Header>Type a number here</Header>
      </HeaderWrapper>
      <Input />
      <div>
        <StyledLink to={'/'}>Go back</StyledLink>
      </div>
    </StyledBody>
  </>

)

export default Converter
