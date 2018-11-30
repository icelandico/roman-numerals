import React from 'react'
import styled, { keyframes } from 'styled-components'

const keyframesDiv = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Toastr = styled.div`
  height: 0px;
  width: 90%;
  background: #807E73;
  color: #000;
  border-radius: 0.5rem;
  border-left: 1rem solid #BA1F36;
  line-height: 50px;
  color: #000;
  position: fixed;
  top: 5%;
  right: 50%;
  transform: translateX(50%);
  opacity: 0;
  visibility: hidden;
  animation-name: ${keyframesDiv};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const ToastrShown = styled(Toastr)`
  opacity: 1;
  visibility: visible;
  height: 50px;
`;

const Toast = (props) => (
  
    props ?
      <ToastrShown>
        {props.alertText}
      </ToastrShown>
    :
    null
  
)

export default Toast