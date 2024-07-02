import React from 'react';
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import Login from './Login'
import Sign from './Sign'
import UserList from './UserList'
import NotFound from './NotFound'

const Routers = () => {
    return (
   <>
    <BrowserRouter>
            <Routes>
            <Route index path='/' element={<Login/>}/>
            <Route path='/sign' element={<Sign/>}/>
            <Route path='/userList' element={<UserList/>}/>
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
   </>     

    );
}

export default Routers;
