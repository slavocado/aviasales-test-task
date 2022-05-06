import { Checkbox } from '@components/checkbox'
import { styled } from '@linaria/react'
import { Colors } from '@ts/enums/colors'
import { FC, useState } from 'react'

type TransfersFilterProps = {
  onChange(transfers: number[]): void
}

export const TransfersFilter: FC<TransfersFilterProps> = ({ onChange }) => {
  const [checkbox1, setCheckbox1] = useState(false)
  const [checkbox2, setCheckbox2] = useState(false)
  const [checkbox3, setCheckbox3] = useState(false)
  const [checkbox4, setCheckbox4] = useState(false)
  const [checkbox5, setCheckbox5] = useState(false)
  const [transferNumbers, setTransferNumbers] = useState<number[]>([])

  const setChecked = (transferNumber: number, isChecked: boolean) => {
    if (isChecked) {
      setTransferNumbers([...transferNumbers, transferNumber])
      onChange([...transferNumbers, transferNumber])
    } else {
      const newArray = transferNumbers.filter((item) => item !== transferNumber)
      setTransferNumbers(newArray)
      onChange(newArray)
    }
  }

  const handleChange1 = (checked: boolean) => {
    setCheckbox1(checked)
    setCheckbox2(checked)
    setCheckbox3(checked)
    setCheckbox4(checked)
    setCheckbox5(checked)

    if (checked) {
      setTransferNumbers([0, 1, 2, 3])
      onChange([0, 1, 2, 3])
    } else {
      setTransferNumbers([])
      onChange([])
    }
  }
  const handleChange2 = (checked: boolean) => {
    setCheckbox2(checked)
    setCheckbox1(checked && checkbox3 && checkbox4 && checkbox5)
    setChecked(0, checked)
  }
  const handleChange3 = (checked: boolean) => {
    setCheckbox3(checked)
    setCheckbox1(checkbox2 && checked && checkbox4 && checkbox5)
    setChecked(1, checked)
  }
  const handleChange4 = (checked: boolean) => {
    setCheckbox4(checked)
    setCheckbox1(checkbox2 && checkbox3 && checked && checkbox5)
    setChecked(2, checked)
  }
  const handleChange5 = (checked: boolean) => {
    setCheckbox5(checked)
    setCheckbox1(checkbox2 && checkbox3 && checkbox4 && checked)
    setChecked(3, checked)
  }

  const checkboxesInfo = [
    {
      label: 'Все',
      value: checkbox1,
      handler: handleChange1,
    },
    {
      label: 'Без пересадок',
      value: checkbox2,
      handler: handleChange2,
    },
    {
      label: '1 пересадка',
      value: checkbox3,
      handler: handleChange3,
    },
    {
      label: '2 пересадки',
      value: checkbox4,
      handler: handleChange4,
    },
    {
      label: '3 пересадки',
      value: checkbox5,
      handler: handleChange5,
    },
  ]

  return (
    <>
      <FilterContainer>
        <FilterHeader>Количество пересадок</FilterHeader>
        <CheckboxesContainer>
          {checkboxesInfo.map((checkbox, index) => (
            <CheckboxWrapper key={index}>
              <Checkbox
                label={checkbox.label}
                isChecked={checkbox.value}
                onChange={checkbox.handler}
              />
            </CheckboxWrapper>
          ))}
        </CheckboxesContainer>
      </FilterContainer>
    </>
  )
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 250px;
  padding: 20px 0 10px;
  background-color: ${Colors.white};
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  color: ${Colors.black};
`

const FilterHeader = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 20px;
  margin-left: 20px;
`

const CheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CheckboxWrapper = styled.div`
  transition: all 300ms;
  &:hover {
    background-color: ${Colors.checkboxLightBlue};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`
