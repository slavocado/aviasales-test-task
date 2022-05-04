import { ButtonGroup } from '@components/button-group'
import { styled } from '@linaria/react'

export const FastFilter = () => {
  const handleFilterChange = (id: number) => {
    console.log(id, ' button pressed')
  }
  return (
    <FilterContainer>
      <ButtonGroup onButtonClick={handleFilterChange} />
    </FilterContainer>
  )
}
const FilterContainer = styled.div`
  display: flex;
  align-items: stretch;
  height: 50px;
  width: 100%;
  border-radius: 5px;
`
