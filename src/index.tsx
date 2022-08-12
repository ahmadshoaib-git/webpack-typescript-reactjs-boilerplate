import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
