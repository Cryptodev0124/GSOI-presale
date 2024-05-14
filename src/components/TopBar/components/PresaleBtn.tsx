
import React, { useCallback } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import * as bsc from '@binance-chain/bsc-use-wallet'
import useModal from '../../../hooks/useModal'
import MarketingModal from './MarketingModal'
import Button from '../../Button'

interface AccountButtonProps {
}

const PresaleButton: React.FC<AccountButtonProps> = (props) => {
    const [onPresentMarketingModal] = useModal(<MarketingModal />)

    const { account } = bsc.useWallet()

    const handleMarketingModal = useCallback(() => {
        onPresentMarketingModal()
    }, [onPresentMarketingModal])

    return (
        <div>
            <StyledAccountButton>
                <Button onClick={handleMarketingModal} size="sm" text="Pre-sale" />
            </StyledAccountButton>
        </div>
    )
}

const StyledAccountButton = styled.div`
    margin-right: 10px;
`

export default PresaleButton