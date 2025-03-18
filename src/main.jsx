import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import PlacesProvider from './context/PlacesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlacesProvider>
      <App />
    </PlacesProvider>
  </React.StrictMode>
)
