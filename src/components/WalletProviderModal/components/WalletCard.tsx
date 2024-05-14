import React from 'react'
import Button from '../../Button'
import Card from '../../Card'
import CardContent from '../../CardContent'
import CardIcon from '../../CardIcon'
import CardTitle from '../../CardTitle'
import Spacer from '../../Spacer'
import styled from 'styled-components'

interface WalletCardProps {
  icon: React.ReactNode
  onConnect: () => void
  title: string
}
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
const WalletCard: React.FC<WalletCardProps> = ({ icon, onConnect, title }) => (
  <Card>
    <CardContent>
      <CardIcon>{icon}</CardIcon>
      <CardTitle text={title} />
      <Spacer />
      <StyledButton onClick={onConnect} > Connect </StyledButton>
    </CardContent>
  </Card>
)

export default WalletCard
