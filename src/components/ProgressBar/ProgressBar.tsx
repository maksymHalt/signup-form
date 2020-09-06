import styled from 'styled-components'
import { COLORS } from '../../utils'

type Props = { 'data-value': number };

const ProgressBar = styled.div<Props>`
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
