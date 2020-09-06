import styled from 'styled-components'
import { COLORS } from '../../utils'

const Footer = styled.footer`
  padding: 15px;
  text-align: center;
  color: ${COLORS.accent};
  font-size: 16px;
  border-top: 1px solid ${COLORS.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default Footer
