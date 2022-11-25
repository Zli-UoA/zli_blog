import React from 'react'
import ReactDOM from 'react-dom/client'
import "the-new-css-reset/css/reset.css"
import { AppRouter } from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
