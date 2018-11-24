import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledNav = styled.ul`
  text-decoration: none;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`

const NavigationContainer = () => {
  <div>
    <StyledNav>
      <NavItem><Link to={'converter'}>Go to Converter</Link></NavItem>
      <NavItem><Link to={'converter'}>Go to About</Link></NavItem>
    </StyledNav>
  </div>
}

export default NavigationContainer