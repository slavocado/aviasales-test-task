import { FastFilter } from '@components/fast-filter'
import { setFastFilter } from '@store/actions/tickets'
import { useDispatch } from 'react-redux'

export const FastFilterContainer = () => {
  const dispatch = useDispatch()
  const handleButtonClick = (id: number) => {
    console.log(id)
    dispatch(setFastFilter({ filteringType: id }))
  }
  return (
    <>
      <FastFilter onButtonClick={handleButtonClick} />
    </>
  )
}
