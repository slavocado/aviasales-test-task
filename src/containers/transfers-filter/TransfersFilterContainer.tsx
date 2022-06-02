import { useDispatch } from 'react-redux'

import { TransfersFilter } from '@components/transfers-filter'
import { setTransfersFilter } from '@store/filters'

export const TransfersFilterContainer = () => {
  const dispatch = useDispatch()

  const hadleFiltersChange = (transfers: number[]) => {
    dispatch(setTransfersFilter({ transfersCount: transfers }))
  }

  return (
    <>
      <TransfersFilter onChange={hadleFiltersChange} />
    </>
  )
}
