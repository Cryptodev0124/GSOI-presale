import React, { useCallback } from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'
import useTokenA from '../../../hooks/useTokenA'
import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Hype, { HypeProps } from '../../Hype'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'
import accountImg from '../../../assets/img/favicon.png'

const AccountModal: React.FC<HypeProps> = ({ onDismiss }) => {
  const { reset } = bsc.useWallet()

  const wallet = bsc.useWallet();

  const handleSignOutClick = useCallback(() => {
    onDismiss!()
    reset()
  }, [onDismiss, reset])

  const tokenA = useTokenA()

  const StyledButton = styled.div`
    background:#505046;
    border-radius: 20px;
    border: 1px solid white;
    padding: 15px;
    width: 100%;
    height: 48px;
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  `
  const StyledA = styled.a`
    background:#505046;
    border-radius: 20px;
    border: 1px solid white;
    padding: 15px;
    width: 100%;
    height: 48px;
    text-decoration: none;
    color: white;
    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }
  `

  return (
    <div>
      <Hype>
        <div>
            <span>Packages - 369USDT / 639USDT / 999USDT</span>
        </div>
        <Spacer />
        <div>
            <span>369USDT</span>
        </div>
        <Spacer />
        <div style={{display: "flex", flexDirection: "column", alignItems: "baseline", width: "100%"}}>
            <span>- Receives Protium farming for 3 months.</span>
            <span>- Receives PoStorage farming for 3 months.</span>
            <span>- Receives 69USDT in $GSOI.</span>
        </div>
        <Spacer />
        <div>
            <span>639USDT</span>
        </div>
        <Spacer />
        <div style={{display: "flex", flexDirection: "column", alignItems: "baseline", width: "100%"}}>
            <span>- Receives Protium farming for 3 months.</span>
            <span>- Receives PoStorage farming for 3 months.</span>
            <span>- Receives 139USDT in $GSOI.</span>
            <span>- Receives 1 CO2 Certificate Voucher.</span>
            <span>- Receives 1 Exclusive NFT (Non-Fungible Token)</span>
            <span>- Receives 1 Priority Support Ticket.</span>
        </div>
        <Spacer />
        <div>
            <span>999USDT</span>
        </div>
        <Spacer />
        <div style={{display: "flex", flexDirection: "column", alignItems: "baseline", width: "100%"}}>
            <span>- Receives Protium farming for 3 months.</span>
            <span>- Receives PoStorage farming for 3 months.</span>
            <span>- Receives 299USDT in $GSOI.</span>
            <span>- Receives 3 CO2 Certificate Voucher.</span>
            <span>- Receives 3 Exclusive NFT (Non-Fungible Token)</span>
            <span>- Receives 3 Priority Support Ticket.</span>
        </div>
      </Hype>
    </div>
  )
}

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledBalanceWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

export default AccountModal
