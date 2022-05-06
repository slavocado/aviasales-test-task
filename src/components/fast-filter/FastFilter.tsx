import { ButtonGroup } from '@components/button-group'
import { styled } from '@linaria/react'
import { FC } from 'react'

type FastFilterProps = {
  onButtonClick(id: number): void
}

export const FastFilter: FC<FastFilterProps> = ({ onButtonClick }) => {
  const handleFilterChange = (id: number) => {
    onButtonClick(id)
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
