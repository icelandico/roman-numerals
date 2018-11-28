import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationContainer = styled.div`
  min-width: 50%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  display: inline-block;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5F5293;
`;

const Navigation = () => (
  <NavigationContainer>
    <List>
      <NavItem><StyledLink to={'/converter/'}>Go to Converter</StyledLink></NavItem>
      <NavItem><StyledLink to={'/about/'}>Go to About</StyledLink></NavItem>
    </List>
  </NavigationContainer>

)

export default Navigation