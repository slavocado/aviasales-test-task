import { TransfersFilter } from '@components/transfers-filter'
import { setTransfersFilter } from '@store/actions/tickets'
import { useDispatch } from 'react-redux'

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
