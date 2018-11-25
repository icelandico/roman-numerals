import React, { Component } from 'react'
import styled from 'styled-components'

const ButtonConvert = styled.button`
  display: block;
  border: 2px solid transparent;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  margin: 2rem auto;
  outline: none;

  :hover {
    background: #201858;
    color: #847EB1;
    border: 2px solid #847EB1;
  }

`

const InputPanel = styled.div`
  text-align: center;
  padding: 15px;
`

class Input extends Component {

  state = {
    input: ''
  }
  
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return(
      <InputPanel>
        <input
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
        />
        <ButtonConvert>Convert</ButtonConvert>
      </InputPanel>
    )
  }

}

export default Input
