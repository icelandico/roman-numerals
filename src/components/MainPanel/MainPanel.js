import React, { Component } from 'react'
import styled from 'styled-components'
import ResultDisplay from './../ResultDisplay/ResultDisplay'
import Toast from './../Toast/Toast'
import globals from '../../../global-variables'

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
  font-family: 'Garamond';
  font-weight: 700;

  :hover {
    background: #314455;
    color: #97aabd;
    border: 2px solid #97aabd;
  }
`

const ButtonContainer = styled.div`
  display: flex;
`

const ButtonConvert = Button.withComponent('button')

const ButtonClear = Button.withComponent('button')

const InputPanel = styled.div`
  text-align: center;
  min-height: 25%;
  margin-top: 2rem;
`

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  transition: box-shadow 0.3s;
  border-radius: 0.5rem;
  font-size: 1.5rem;

  &:focus {
    outline: none;
    box-shadow: 0.4rem 0.4rem 0.75rem #000;
  }
`

class Input extends Component {
  state = {
    input: '',
    result: '',
    alert: '',
  }

  clearInput = () => {
    this.setState({
      input: '',
    })
  }

  handleChange = event => {
    this.setState({
      input: event.target.value,
    })
  }

  handleConvert = () => {
    const inputNumber = parseInt(this.state.input)
    this.validateInput(inputNumber)
  }

  handleDisplayResult = input => {
    this.setState({
      result: this.convertNumber(input),
    })
  }

  convertNumber = number => {
    const { latinNums, romanNums } = globals
    const thousands = Math.floor(number / 1000) * 1000
    const hundreds = Math.floor((number % 1000) / 100) * 100
    const decimals = Math.floor((number % 100) / 10) * 10
    const nums = number % 10
    const destructurizedNumber = [thousands, hundreds, decimals, nums]
    const romanNumsArray = destructurizedNumber.map(
      number => romanNums[latinNums.indexOf(number)]
    )
    return romanNumsArray.join('')
  }

  validateInput = input => {
    const emptyInputText = 'Type at least one digit'
    const higherNumberText = 'Max number is 4999'
    const zeroText = "Romans didn't have zero!"
    if (input === 0) {
      return this.handleError(zeroText)
    } else if (input > 4999) {
      return this.handleError(higherNumberText)
    } else if (!input) {
      return this.handleError(emptyInputText)
    } else {
      return this.handleDisplayResult(input)
    }
  }

  handleError = errorText => {
    this.setState({
      input: '',
      alert: errorText,
    })
    this.clearTimeout()
    this.toastTimer = setTimeout(() => this.setState({ alert: '' }), 5000)
  }

  clearTimeout = () => {
    clearTimeout(this.toastTimer)
  }

  render() {
    return (
      <InputPanel>
        <StyledInput
          placeholder="Type a number"
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
        />
        <ButtonContainer>
          <ButtonConvert onClick={this.handleConvert}>Convert</ButtonConvert>
          <ButtonClear onClick={this.clearInput}>Clear</ButtonClear>
        </ButtonContainer>
        <ResultDisplay result={this.state.result} />
        {this.state.alert ? <Toast alertText={this.state.alert} /> : null}
      </InputPanel>
    )
  }
}

export default Input
