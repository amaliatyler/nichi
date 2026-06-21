import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'solo-leveling')
  }, [])

  return (
    <div>
      <h1>Nichi 日</h1>
      <p>Жизнь состоит не из событий, а из повседневности.</p>
    </div>
  )
}

export default App