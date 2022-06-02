import { useDispatch } from 'react-redux'

import { FastFilter } from '@components/fast-filter'
import { setFastFilter } from '@store/filters'

export const FastFilterContainer = () => {
  const dispatch = useDispatch()
  const handleButtonClick = (id: number) => {
    dispatch(setFastFilter({ filteringType: id }))
  }
  return (
    <>
      <FastFilter onButtonClick={handleButtonClick} />
    </>
  )
}
