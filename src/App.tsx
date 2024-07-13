import { useRef } from 'react'
import Grid from './components/Grid'
import Nav from './components/Nav'

function App() {
  const isVisualizationRunningRef = useRef<boolean>(false)
  return (
    <div className='w-screen h-screen bg-black text-white flex flex-col justify-center items-center'>
      <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
      <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
    </div>
  )
}

export default App
