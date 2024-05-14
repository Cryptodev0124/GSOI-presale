import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href="https://twitter.com/cacotoken">
        <i className="fab fa-twitter" style={{fontSize:'36px'}}></i>
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/cacotokenchannel">
        <i className="fab fa-telegram-plane" style={{fontSize:'36px'}}></i>
      </StyledLink>
      <StyledLink target="_blank" href="https://www.instagram.com/cacotoken/">
        <i className="fab fa-instagram" style={{fontSize:'36px'}}></i>
      </StyledLink>
      {/* <StyledLink target="_blank" href="https://www.youtube.com/channel/UC0rVFr2Xi8nePxEUWQgBzvQ">
        <i className="fab fa-youtube" style={{fontSize:'36px'}}></i>
      </StyledLink> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  text-transform: lowercase;
  align-items: start;
  display: flex;
`

const StyledLink = styled.a`
  color: white;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: white;
  }
`

export default Nav
