import React from 'react'
import styled from 'styled-components'

const ResultDisplay = (props) => (
  <>
    <p>{props.result ? props.result : ' ' }</p>
  </>
)

export default ResultDisplay