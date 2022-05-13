import { FastFilter } from '@components/fast-filter'
import { setFastFilter } from '@store/filters'
import { useDispatch } from 'react-redux'

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
