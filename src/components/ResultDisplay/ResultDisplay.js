import React from 'react'
import styled from 'styled-components'

const ResultTab = styled.div`
  font-size: 4vh;
  letter-spacing: 0.5rem;
  text-indent: 0.5rem;
  font-weight: 900;
`

const ResultDisplay = (props) => (
  <ResultTab>
    <p>{props.result ? props.result : '' }</p>
  </ResultTab>
)

export default ResultDisplay