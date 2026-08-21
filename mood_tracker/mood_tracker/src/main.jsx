import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './components/Profile'
import { StrictMode } from 'react'
import Userlist from './components/Userlist'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Profile/>
    <Userlist/>
  </StrictMode>
)