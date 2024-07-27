import React, { useEffect } from 'react'

const App: React.FC = () => {
  useEffect(() => {
    Office.onReady(() => {
      // Office.js is ready
      console.log('Office.js is ready')
    })
  }, [])

  return (
    <div>
      <h1>Hello,Sachin Vite Word Add-in!</h1>
    </div>
  )
}

export default App
