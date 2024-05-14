import React from 'react'
import styled from 'styled-components'

interface LabelProps {
  text?: string
}

const Label: React.FC<LabelProps> = ({ text }) => (
  <StyledLabel>{text}</StyledLabel>
)

const StyledLabel = styled.div`
  color: white;
  font-size: 15px;
  // position: relative;
  // left: -25px;
`

export default Label
