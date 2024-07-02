import {Route,BrowserRouter, Routes} from 'react-router-dom'
import Login from './components/Login'
import Sign from './components/Sign'
import UserList from './components/UserList'
import NotFound from './components/NotFound'
import UserProvider from './components/UserProvider'

function App() {
  return (
    <>
    <UserProvider>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/UserList' element={<UserList/>}/>
          <Route path='*' element={<NotFound/>} />
       </Routes>
    </BrowserRouter>
   
       </UserProvider>
    </>
  )
}

export default App
