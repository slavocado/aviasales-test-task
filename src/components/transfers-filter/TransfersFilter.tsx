import { styled } from '@linaria/react'
import { Colors } from '@styles/colors'

export const TransfersFilter = () => {
  return (
    <>
      <FilterContainer></FilterContainer>
    </>
  )
}
const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 300px;
  min-width: 300px;
  padding: 20px;
  background-color: ${Colors.white};
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`
