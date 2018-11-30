import React from 'react'
import styled, { keyframes } from 'styled-components'

const keyframesDiv = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    oapcity: 1;
  }
`

const Toastr = styled.div`
  height: 0px;
  width: 250px;
  background: #807E73;
  color: #000;
  border-radius: 0.5rem;
  border-left: 1rem solid #BA1F36;
  line-height: 50px;
  color: #000;
  position: fixed;
  top: 15%;
  right: 50%;
  transform: translateX(50%);
  transition: height 2s ease-in-out, opacity 2s ease-in-out;
  opacity: 0;
  visibility: hidden;
  animation-name: ${keyframesDiv};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const ToastrShown = styled(Toastr)`
  transition: height 2s, opacity 2s;
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