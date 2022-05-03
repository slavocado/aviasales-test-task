import { styled } from '@linaria/react'
import { Colors } from '@styles/colors'

export const PriceFilter = () => {
  return (
    <>
      <FilterContainer></FilterContainer>
    </>
  )
}
const FilterContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 50px;
  width: 100%;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.lightGray};
  border-radius: 5px;
`
