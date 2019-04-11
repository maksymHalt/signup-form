import styled from 'styled-components'
import { COLORS } from '../../utils'

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.white};
  border-radius: 10px;
  border: 1px solid ${COLORS.border};
  width: 290px;
  height: 395px;
`

export default Panel
