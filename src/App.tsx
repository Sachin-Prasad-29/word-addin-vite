/// <reference types="office-js" />

import React, { useState } from 'react'
import Login from './pages/Login'
import History from './pages/History'
import Chat from './pages/Chat'
import Help from './pages/Help'

const App: React.FC = () => {
    const [curPage,setCurPage] = useState('LOGIN')
    return <>
        {curPage==='LOGIN' && <Login/>}
        {curPage==='HISTORY' && <History/>}
        {curPage==='CHAT' && <Chat/>}  
        {curPage==='HELP' && <Help/>}  
    </>
}

export default App
