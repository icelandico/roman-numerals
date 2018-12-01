import React from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 !important;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: #314455;
  color: #97AABD;
`

const Body = (props) => {
  return (
    <StyledBody>
      {props.children}
    </StyledBody>
  )
}

export default Body