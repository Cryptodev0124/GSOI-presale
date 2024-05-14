import React, { useCallback } from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'
import useTokenA from '../../../hooks/useTokenA'
import Button from '../../Button'
import CardIcon from '../../CardIcon'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import Spacer from '../../Spacer'
import accountImg from '../../../assets/img/favicon.png'

const AccountModal: React.FC<ModalProps> = ({ onDismiss }) => {
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
      <Modal>
        <ModalTitle text="My Account" />
        <ModalContent>
          <Spacer />

          <div style={{ display: 'flex' }}>
            <StyledBalanceWrapper>
              <CardIcon>
                <img style={{width: 70}} src={accountImg}></img>
              </CardIcon>
              <StyledBalance>
              </StyledBalance>
            </StyledBalanceWrapper>
          </div>

          <Spacer />
          <div style={{width: 316, marginLeft: 'auto', marginRight: 'auto', position: 'relative', display:'flex', bottom: 12,}}>
            <StyledA
              href= {'https://polygonscan.com/address/' + wallet.account}
            >View on Polygonscan</StyledA>
          </div>
          <Spacer />
          <div style={{width: 316, marginLeft: 'auto', marginRight: 'auto', position: 'relative', bottom: 12,}}>
            <StyledButton
              onClick={handleSignOutClick}
            >Disconnect</StyledButton>
          </div>
        </ModalContent>
        <ModalActions>
          <div style={{width: 180, marginLeft: 'auto', marginRight: 'auto', position: 'relative', bottom: 12,}}>
            <StyledButton onClick={onDismiss} >Cancel</StyledButton>
          </div>
        </ModalActions>
      </Modal>
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
