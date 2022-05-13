import { FastFilter, TransfersFilter } from '@ts/types/filters'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TicketsState = {
  transfersFilter?: TransfersFilter
  fastFilter?: FastFilter
}

const initialState: TicketsState = {}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTransfersFilter: (state, action: PayloadAction<TransfersFilter>) => {
      state.transfersFilter = action.payload
    },
    setFastFilter: (state, action: PayloadAction<FastFilter>) => {
      state.fastFilter = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTransfersFilter, setFastFilter } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer
