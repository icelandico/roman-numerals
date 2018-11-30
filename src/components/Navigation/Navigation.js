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

// const Navigation = () => (
//   <NavigationContainer>
//     <List>
//       <NavItem><StyledLink to={'/converter/'}>Converter</StyledLink></NavItem>
//       <NavItem><StyledLink to={'/about/'}>About</StyledLink></NavItem>
//       <NavItem><StyledLink to={'/'}>Main Page</StyledLink></NavItem>
//     </List>
//   </NavigationContainer>
// )

const routes = [{
  to: '/converter/',
  message: 'Go to Converter',
},
{
  to: '/about/',
  message: 'Go to About',
},
{
  to: '/',
  message: 'Go to Main Page',
}];

const Navigation = (currentLocation) => (
  <NavigationContainer>
    <List>
      {
        routes.filter(route => {
        if (route.to !== currentLocation) {
          return <NavItem><StyledLink to={route.to}>{route.message}</StyledLink></NavItem>
        }
        })
      }
    </List>
  </NavigationContainer>
)

export default Navigation