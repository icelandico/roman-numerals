import React from 'react'
import styled from 'styled-components'

const ResultTab = styled.div`
  font-size: 4vh;
  letter-spacing: 0.5rem;
  text-indent: 0.5rem;
  font-weight: 900;
`

const ResultText = styled.p`
  box-shadow: 0 0 25px 5px #000;
  padding: 1rem;
`

const ResultDisplay = props => (
  <ResultTab>
    {props.result ? <ResultText>{props.result}</ResultText> : null}
  </ResultTab>
)

export default ResultDisplay
