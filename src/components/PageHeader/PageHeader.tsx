import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import { shorten } from '../../utils'

interface PageHeaderProps {
  icon?: React.ReactNode
  maintitle?: string
  subtitle?: string
  title?: string
  tokenAddress?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, maintitle, subtitle, title, tokenAddress }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledMainTitle>{maintitle}</StyledMainTitle>
        <StyledTitle>{title}</StyledTitle>
        <StyledToken>$GSOI going to the moon!</StyledToken>
        <StyledToken>You can buy GSOI and stake it here with Uniswap</StyledToken>
        <StyledSubtitle>GSOI: <a href="https://goerli.etherscan.io/address/0x3f1dB0e5E834e8bbcdEf4477c86919064274c25d#code">{tokenAddress}</a></StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  padding-top: ${(props) => props.theme.spacing[2]}px;
  margin: 0 auto;
  font-size: 27px;
  @media (max-width: 767px) {
    padding-top: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledMainTitle = styled.div`
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  flex: 1 1 0%;
  line-height: 15px;
  text-align: center;
  color: #2F80ED;
  @media (max-width: 767px) {
  }
`

const StyledTitle = styled.div`
  color: #000000;
  font-family: 'Dehuti',Dehuti;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 44px;
  padding: 16px 0px;
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
   @media (max-width: 767px) {
  }
`

const StyledSubtitle = styled.div`
  font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: bold;
    width: fit-content;
    font-size: 15px;
    line-height: 18px;
    margin-top: 20px;
    color: black;
    text-align: center;
    cursor: pointer;
    overflow-wrap: anywhere;
  @media (max-width: 767px) {
  }
`

const StyledToken = styled.div`
    font-family: 'Poppins',sans-serif;
    // font-style: normal;
    // font-weight: bold;
    width: fit-content;
    font-size: 20px;
    line-height: 18px;
    margin: auto;
    color: #000000;
    text-align: center;
    cursor: pointer;
    overflow-wrap: anywhere;
  @media (max-width: 767px) {
  }
`

const StyledIcon = styled.div`
  text-align: center;
  position: relative;
  margin-top: 0px;
  @media (max-width: 767px) {
    left: 0px;
  }
`

export default PageHeader
