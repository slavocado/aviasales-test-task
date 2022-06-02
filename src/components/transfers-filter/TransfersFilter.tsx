import { styled } from '@linaria/react'
import { FC, useState, useCallback } from 'react'

import { Checkbox } from '@components/checkbox'
import { COLORS } from '@ts/constants/colors'

type TransfersFilterProps = {
  onChange(transfersCount: number[]): void
}

type CheckboxType = 'check_1' | 'check_2' | 'check_3' | 'check_4' | 'check_5'

interface CheckboxInfo {
  label: string
  handleChangeOther?(checked: boolean, map: StoreType): StoreType
  transfersCount?: number
}

type StoreType = Partial<Record<CheckboxType, boolean>>

const checkboxesInfo: Record<CheckboxType, CheckboxInfo> = {
  check_1: {
    label: 'Все',
    handleChangeOther: (checked) => {
      return {
        check_2: checked,
        check_3: checked,
        check_4: checked,
        check_5: checked,
      }
    },
  },
  check_2: {
    label: 'Без пересадок',
    transfersCount: 0,
    handleChangeOther: (checked, map) => ({
      check_1: checked && map.check_3 && map.check_4 && map.check_5,
    }),
  },
  check_3: {
    label: '1 пересадка',
    transfersCount: 1,
    handleChangeOther: (checked, map) => ({
      check_1: map.check_2 && checked && map.check_4 && map.check_5,
    }),
  },
  check_4: {
    label: '2 пересадка',
    transfersCount: 2,
    handleChangeOther: (checked, map) => ({
      check_1: map.check_2 && map.check_3 && checked && map.check_5,
    }),
  },
  check_5: {
    label: '3 пересадка',
    transfersCount: 3,
    handleChangeOther: (checked, map) => ({
      check_1: map.check_2 && map.check_3 && map.check_4 && checked,
    }),
  },
}
const chbs = Object.keys(checkboxesInfo) as CheckboxType[]

export const TransfersFilter: FC<TransfersFilterProps> = ({ onChange }) => {
  const [map, handleChange] = useState<StoreType>({
    check_1: false,
    check_2: false,
    check_3: false,
    check_4: false,
    check_5: false,
  })

  const fabricState = useCallback(
    (key: CheckboxType) => {
      const { handleChangeOther } = checkboxesInfo[key]

      return (checked: boolean) => {
        const otherConfig = handleChangeOther?.(checked, map) || {}
        const newMap = {
          ...map,
          ...otherConfig,
          [key]: checked,
        }

        const transfersArr: number[] = []
        chbs.forEach((checkbox) => {
          const isChecked = newMap[checkbox]
          const transfers = checkboxesInfo[checkbox]?.transfersCount
          if (isChecked && transfers !== undefined) {
            transfersArr.push(transfers)
          }
        })

        onChange(transfersArr)
        handleChange(newMap)
      }
    },
    [map, handleChange, onChange]
  )

  return (
    <>
      <FilterContainer>
        <FilterHeader>Количество пересадок</FilterHeader>

        <CheckboxesContainer>
          {chbs.map((key) => {
            const item = checkboxesInfo[key]

            return (
              <CheckboxWrapper key={key}>
                <Checkbox
                  label={item.label}
                  isChecked={map[key]}
                  onChange={fabricState(key)}
                />
              </CheckboxWrapper>
            )
          })}
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
  background-color: ${COLORS.WHITE};
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  color: ${COLORS.BLACK};
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
    background-color: ${COLORS.CHECKBOX_LIGHT_BLUE};
  }
  &:last-child {
    margin-bottom: 0px;
  }
`
