import React, { Component } from 'react'
import styled from 'styled-components'
import ResultDisplay from './../ResultDisplay/ResultDisplay'
import Toast from './../Toast/Toast'

const ButtonConvert = styled.button`
  background: #97AABD;
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
    color: #97AABD;
    border: 2px solid #97AABD;
  }
`;

const InputPanel = styled.div`
  text-align: center;
  padding: 3rem;
  min-height: 30%;
`;

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
    alert: ''
  }
  
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleConvert = () => {
    const inputNumber = parseInt(this.state.input)
    this.validateInput(inputNumber)
  }

  handleDisplayResult = (input) => {
    this.setState({
      result: this.convertNumber(input)
    })
  }

  convertNumber = (number) => {
    const latinNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000]
    const romanNums = ['I', 'II', 'III', 'IV', 'V','VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM', 'MMM', 'MMMM']
    const thousands = Math.floor(number / 1000) * 1000;
    const hundreds = (Math.floor((number % 1000) / 100)) * 100;
    const decimals = (Math.floor((number % 100) / 10)) * 10;
    const nums = number % 10;
    const destructurizedNumber = [thousands, hundreds, decimals, nums];
    const romanNumsArray = destructurizedNumber.map(number => romanNums[latinNums.indexOf(number)])
    return romanNumsArray.join('')
  }

  validateInput = (input) => {
    const emptyInputText = 'Type at least one digit';
    const higherNumberText = 'Max number is 4999';
    if (!input) {
      return this.handleError(emptyInputText)
    }
    else if (input > 4999) {
      return this.handleError(higherNumberText)
    }
    else {
      return this.handleDisplayResult(input)
    }
  }

  handleError = (errorText) => {
    clearTimeout(toastTimer)
    this.setState({
      input: '',
      alert: errorText
    })
    const toastTimer = setTimeout(() => this.setState( { alert: '' } ), 5000)
  }

  render() {
    return(
      <InputPanel>
        <StyledInput
          placeholder="Type a number"
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
        />
        <ButtonConvert
          onClick={this.handleConvert}
        >
        Convert
        </ButtonConvert>
        <ResultDisplay 
          result={this.state.result}
        />
        {

        this.state.alert ?

        <Toast
          alertText={this.state.alert}
        />

        :

        null 

        }
      </InputPanel>
    )
  }
}

export default Input


