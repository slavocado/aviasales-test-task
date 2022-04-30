import { FC } from 'react'
import './styles.css'
import IMAGE from './logo.png'

export const App: FC = () => {
  const f = 'fdfd'
  return (
    <>
      <h1> Aviasales {process.env.NODE_ENV} </h1>
      <img src={IMAGE} alt="re" width="300" height="200" />
    </>
  )
}
