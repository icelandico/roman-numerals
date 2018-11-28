import React from 'react'
import styled from 'styled-components'

const Toastr = styled.div`
  height: 50px;
  width: 250px;
  background: #72686A;
  color: #000;
  border-radius: 0.5rem;
  border-left: 1rem solid #BA1F36;
  line-height: 50px;
  color: #fff;
  position: fixed;
  top: 15%;
  right: 50%;
  transform: translateX(50%)
`

const Toast = () => (
  <Toastr>
    This will be Toast
  </Toastr>
)

export default Toast