import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Today from './pages/Today'
import Goals from './pages/Goals'
import Schedule from './pages/Schedule'
import Progress from './pages/Progress'
import Challenges from './pages/Challenges'
import Settings from './pages/Settings'
import Navigation from './components/Navigation'

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'solo-leveling')
  }, [])

  return (
    <div className="app">
      <main className="app__content">
        <Routes>
          <Route path="/" element={<Navigate to="/today" replace />} />
          <Route path="/today" element={<Today />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Navigation />
    </div>
  )
}

export default App