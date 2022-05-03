import { css } from '@linaria/core'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    * {
      margin: 0;
      padding: 0;

      box-sizing: border-box;
    }

    html {
      width: 100%;
      min-height: 100%;
    }

    body {
      width: 100%;
      min-height: 100vh;

      font-size: 14px;
      font-family: sans-serif;
    }
  }
`
