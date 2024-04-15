import { useEffect, useState } from 'react'

import viteLogo from '/vite.svg'

import reactLogo from './assets/react.svg'
import { supabase } from './utils/supabase'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const init = async () => {
      const { data, error } = await supabase.from('user').select('*')
      if (error) {
        console.log(error)
        return
      }
      console.log(data)
    }

    init()
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
