import styled from 'styled-components'

const Wrapper = styled.div`
  background: url(pizza2.png);
  display: grid;
  grid-template-columns: 1fr minmax(280px, ${props => props.theme.maxWidth}) 1fr;
  padding: 0 1rem;
`

export default Wrapper
