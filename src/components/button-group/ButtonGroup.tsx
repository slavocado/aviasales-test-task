import { styled } from '@linaria/react'
import { FC, useState } from 'react'

import { COLORS } from '@ts/constants/colors'

type ButtonGroupProps = {
  onButtonClick(id: number): void
}

type Button = {
  id: number
  label: string
}

const buttons: Button[] = [
  {
    id: 1,
    label: 'Самый дешевый',
  },
  {
    id: 2,
    label: 'Самый быстрый',
  },
  {
    id: 3,
    label: 'Оптимальный',
  },
]

export const ButtonGroup: FC<ButtonGroupProps> = ({ onButtonClick }) => {
  const [choosenButton, setChoosenButton] = useState<number>()

  const handleButtonClick = (buttonId: number) => {
    setChoosenButton(buttonId)
    onButtonClick(buttonId)
  }

  return (
    <ButtonGroupContainer>
      {buttons.map(({ id, label }) => (
        <Button
          className={id === choosenButton ? 'active' : ''}
          onClick={() => {
            handleButtonClick(id)
          }}
          key={id}
        >
          {label}
        </Button>
      ))}
    </ButtonGroupContainer>
  )
}

const Button = styled.button`
  display: grid;
  flex-grow: 1;
  place-items: center;
  border-radius: 0px;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.LIGHT_GRAY};
  transition: all 300ms;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  color: ${COLORS.BLACK};

  &:hover {
    background-color: ${COLORS.LIGHT_GRAY};
    cursor: pointer;
  }

  &.active {
    background-color: ${COLORS.BLUE};
    color: ${COLORS.WHITE};
  }
`

const ButtonGroupContainer = styled.div`
  display: flex;
  flex-grow: 1;

  ${Button}:first-child {
    border-right-width: 0;
    border-radius: 5px 0 0 5px;
  }
  ${Button}:last-child {
    border-left-width: 0;
    border-radius: 0px 5px 5px 0;
  }
`
