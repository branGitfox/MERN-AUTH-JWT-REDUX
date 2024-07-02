
import { Component } from 'react'
import Routers from './components/Routers'
import UserProvider from './components/UserProvider'
class App extends Component{
  render(){
    return (
    <>
      <UserProvider>
        <Routers/>
      </UserProvider>
    </>
  )
  }

}

export default App
