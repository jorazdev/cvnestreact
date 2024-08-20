import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../css/index.css'
import Router from './router/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router/>
    <App />
  </React.StrictMode>,
)
