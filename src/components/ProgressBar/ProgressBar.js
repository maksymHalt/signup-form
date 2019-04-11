import styled from 'styled-components'
import { COLORS } from '../../utils'

const ProgressBar = styled.div`
  display: flex;
  border: solid ${COLORS.border};
  border-width: 1px 0;
  height: 8px;

  &::before {
    content: '';
    width: ${({ 'data-value': value }) => value}%;
    background-color: ${COLORS.accent};
  }
`

export default ProgressBar
