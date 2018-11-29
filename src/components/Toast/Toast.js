import React from 'react'
import styled from 'styled-components'

const Toastr = styled.div`
  height: 50px;
  width: 250px;
  background: #8712aa;
  color: #000;
  border-radius: 0.5rem;
  border-left: 1rem solid #BA1F36;
  line-height: 50px;
  color: #000;
  position: fixed;
  top: 15%;
  right: 50%;
  transform: translateX(50%);
`

const Toast = () => (
  <Toastr>
    {this.props.alertText}
  </Toastr>
)

export default Toast