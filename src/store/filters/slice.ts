import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FastFilter, TransfersFilter } from '@ts/types/filters'

export type FiltersState = {
  transfersFilter?: TransfersFilter
  fastFilter?: FastFilter
}

const initialState: FiltersState = {}

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

export const { setTransfersFilter, setFastFilter } = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer
