import { useState } from 'react'
import Dashboard from './component.jsx/Dashboard'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Dashboard/>
      </AuthProvider>
    </>
  )
}

export default App;
