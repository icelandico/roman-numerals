import React, { Component } from 'react'
import styled from 'styled-components'
import ResultDisplay from './../ResultDisplay/ResultDisplay'
import Toast from './../Toast/Toast'

const ButtonConvert = styled.button`
  background: #807E73;
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
`;

const InputPanel = styled.div`
  text-align: center;
  padding: 15px;
  min-height: 30%;
`;

class Input extends Component {
  state = {
    input: '',
    result: '',
    alertNumber: null,
    alertEmptyInput: null
  }
  
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleConvert = () => {
    const inputNumber = parseInt(this.state.input)
    this.setState({
      result: this.convertNumber(inputNumber)
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

  handleOnBlur = () => {
    alert('Type number up to 4999!')
    this.setState({
      input: 4999
    })
  }

  render() {
    return(
      <InputPanel>
        <input
          onChange={this.handleChange}
          onBlur={this.state.input > 4999 ? this.handleOnBlur : null}
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
        <Toast
          alertNumber={this.state.alertNumber}
          alertEmptyInput={this.state.alertEmptyInput}
        />
      </InputPanel>
    )
  }
}

export default Input
