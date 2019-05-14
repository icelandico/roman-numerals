import React, { Component } from "react"
import styled from "styled-components"

const Button = styled.button`
	background: #97aabd;
	display: block;
	border: 2px solid transparent;
	border-radius: 15px;
	padding: 0.5rem 2rem;
	margin: 2rem auto;
	outline: none;
	font-size: 1rem;
	text-transform: uppercase;
	font-family: "Garamond";
	font-weight: 700;

	:hover {
		background: #314455;
		color: #97aabd;
		border: 2px solid #97aabd;
	}
`

class ActionButton extends Component {

  render() {
    return (
      <Button onClick={this.props.clearInput || this.props.convert}>
        {this.props.buttonTitle}
      </Button>
    )
  }
}

export default ActionButton
