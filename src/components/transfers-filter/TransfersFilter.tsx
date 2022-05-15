import { Checkbox } from '@components/checkbox'
import { styled } from '@linaria/react'
import { Colors } from '@ts/enums/colors'
import { FC, useState, useCallback } from 'react'

type TransfersFilterProps = {
  onChange(transfers: number[]): void
}

type CheckboxType =
  | 'check_1'
  | 'check_2'
  | 'check_3'
  | 'check_4'
  | 'check_5';

interface CheckboxInfo {
  label: string;
  handleChangeOther?(checked: boolean): StoreType;
}

type StoreType = Partial<Record<CheckboxType, boolean>>;

const checkboxesInfo: Record<CheckboxType, CheckboxInfo> = {
  check_1: {
    label: 'Все',
    handleChangeOther: checked => {
      return {
        check_2: !checked,
        check_3: checked,
      };
    }
  },
  check_2: {
    label: 'Без пересадок',
  },
  check_3: {
    label: '1 пересадка',
  },
  check_4: {
    label: '2 пересадка',
  },
  check_5: {
    label: '3 пересадка',
  },
};
const chbs = Object.keys(checkboxesInfo) as CheckboxType[]

export const TransfersFilter: FC<TransfersFilterProps> = ({ onChange }) => {
  const [map, handleChange] = useState<StoreType>({
    check_1: false,
  })

  const fabricState = useCallback((key: CheckboxType) => {
    const {handleChangeOther} = checkboxesInfo[key];

    return (checked: boolean) => {
      const otherConfig = handleChangeOther?.(checked) || {};

      handleChange({
        ...map,
        ...otherConfig,
        [key]: checked,
      })
    }
  }, [map, handleChange]);

  // const handleChange2 = (checked: boolean) => {
  //   setCheckbox2(checked)
  //   setCheckbox1(checked && checkbox3 && checkbox4 && checkbox5)
  //   setChecked(0, checked)
  // }
  // const handleChange3 = (checked: boolean) => {
  //   setCheckbox3(checked)
  //   setCheckbox1(checkbox2 && checked && checkbox4 && checkbox5)
  //   setChecked(1, checked)
  // }
  // const handleChange4 = (checked: boolean) => {
  //   setCheckbox4(checked)
  //   setCheckbox1(checkbox2 && checkbox3 && checked && checkbox5)
  //   setChecked(2, checked)
  // }
  // const handleChange5 = (checked: boolean) => {
  //   setCheckbox5(checked)
  //   setCheckbox1(checkbox2 && checkbox3 && checkbox4 && checked)
  //   setChecked(3, checked)
  // }

  return (
    <>
      <FilterContainer>
        <FilterHeader>Количество пересадок</FilterHeader>

        <CheckboxesContainer>
          {chbs.map((key) => {
            const item = checkboxesInfo[key];

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
