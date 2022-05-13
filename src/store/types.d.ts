import { StateType, ActionType } from 'typesafe-actions'

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').default>

  export type RootState = StateType<typeof import('./redusers/index').default>

  export type RootAction = ActionType<typeof import('./actions/index').default>

  interface Types {
    RootAction: RootAction
  }
}
