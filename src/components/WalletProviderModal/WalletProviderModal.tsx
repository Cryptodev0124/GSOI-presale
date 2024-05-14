// @ts-nocheck
import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'
import metamaskLogo from '../../assets/img/metamask-fox.svg'
import bscLogo from '../../assets/img/bsc.png'
import trustLogo from '../../assets/img/trustwallet.png'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'
import WalletCard from './components/WalletCard'
import Button from '../Button'
import Web3 from 'web3'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect, chainId } = bsc.useWallet()

  useEffect(() => {
    console.log("ChainID", chainId)
    const switchNetwork = async() => {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: Web3.utils.toHex(chainId) }]
      });
    }

    switchNetwork();
    if (account) {
      onDismiss()
    }
  }, [chainId, account, onDismiss])

  // console.log("ChainId", chainId)
  // useEffect(() => {
  //   if (account) {
  //     onDismiss()
  //   }
  // }, [account, onDismiss])

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
  return (
    <Modal>
        <ModalTitle text="Connect Your Wallet" />

        <ModalContent>
          <StyledWalletsWrapper>
            <StyledWalletCard>
              <WalletCard
                icon={<img src={metamaskLogo} alt='Metamask' style={{ height: 32 }} />}
                onConnect={() => connect('injected')}
                title="Metamask"
              />
              <Spacer />
              {/* <WalletCard
                icon={<img src={bscLogo} alt='BSC' style={{ height: 32 }} />}
                onConnect={() => connect('bsc')}
                title="BSC wallet"
              />
              <Spacer />              */}
            </StyledWalletCard>
          </StyledWalletsWrapper>
        </ModalContent>

        <ModalActions>
          <StyledButton  onClick={onDismiss} >Cancel</StyledButton>
        </ModalActions>

    </Modal>
  )
}

const StyledWalletsWrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  font-family: 'Print Char 21';
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.7);
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`
export default WalletProviderModal
