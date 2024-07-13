import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PathFinderContextProvider from './context/PathFinderContext.tsx'
import TileContextProvider from './context/TileContext.tsx'
import { SpeedContextProvider } from './context/SpeedContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PathFinderContextProvider>
      <TileContextProvider>
        <SpeedContextProvider>
          <App />
        </SpeedContextProvider>
      </TileContextProvider>
    </PathFinderContextProvider>
  </React.StrictMode>
)
