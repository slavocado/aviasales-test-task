import { styled } from '@linaria/react'
import { Colors } from '@ts/enums/colors'
import { FC, useCallback } from 'react'

type CheckboxProps = {
  label: string
  isChecked: boolean | undefined
  onChange(checked: boolean): void
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  isChecked = false,
  onChange,
}) => {
  const handleChange = useCallback(() => {
    onChange(!isChecked)
  }, [isChecked, onChange])

  return (
    <Layout onClick={handleChange}>
      <CheckboxContainer>
        <HiddenCheckbox checked={isChecked} onChange={handleChange} />
        <StyledCheckbox checked={isChecked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <Label>{label}</Label>
    </Layout>
  )
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  padding: 10px 20px;
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.label`
  margin-left: 10px;
  user-select: none;
  &:hover {
    cursor: pointer;
  }
`

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const DefaultInput = (props: any) => {
  return <input type="checkbox" {...props} />
}

const HiddenCheckbox = styled(DefaultInput)`
  &[type='checkbox'] {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

const Icon = styled.svg`
  fill: none;
  stroke: ${Colors.checkboxBlue};
  stroke-width: 2px;
`

type CustomCheckboxProps = {
  checked: boolean
}
const StyledCheckbox = styled.div<CustomCheckboxProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 2px solid
    ${(props) => (props.checked ? Colors.checkboxBlue : Colors.checkboxGray)};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${Colors.checkboxShadowBlue};
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
