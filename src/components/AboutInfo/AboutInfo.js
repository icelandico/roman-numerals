import React from 'react'
import styled from 'styled-components'

const AboutInfoStyled = styled.div`
  margin-bottom: 3rem;
  width: 75%;
  font-size: 1rem;
  text-align: justify;

  @media (min-width: 768px) {
    width: 50%;
    font-size: 2rem;
    line-height: 3rem;
  }
`

const AboutInfo = () => {
  return (
    <AboutInfoStyled>
      <p>
        Ancient Romans used a special method of showing numbers. I provide You a
        tool to transform number to Roman Symbols.
        <br />
        The input is limited to 4999 so far.
      </p>
    </AboutInfoStyled>
  )
}

export default AboutInfo
