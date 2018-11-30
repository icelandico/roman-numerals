import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationContainer = styled.div`
  min-width: 50%;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 40%;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 20%;
  }
`;

const NavItem = styled.li`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  display: inline-block;

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: #97AABD;
    transition: width .3s;
    top: 5px;
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #97AABD;
`;

const Navigation = () => (
  <NavigationContainer>
    <List>
      <NavItem><StyledLink to={'/converter/'}>Converter</StyledLink></NavItem>
      <NavItem><StyledLink to={'/about/'}>About</StyledLink></NavItem>
      <NavItem><StyledLink to={'/'}>Main Page</StyledLink></NavItem>
    </List>
  </NavigationContainer>
)

export default Navigation