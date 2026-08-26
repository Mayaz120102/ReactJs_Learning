import { createRoot } from 'react-dom/client'
import './index.css'
// import Profile from './components/Profile'
import { StrictMode } from 'react'
import Products from './components/Products'
// import Userlist from './components/Userlist'
// import UserPhotos from './components/UserPhotos'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <Profile/>
    <Userlist/>
    <UserPhotos/> */}
    <Products/>
  </StrictMode>
)