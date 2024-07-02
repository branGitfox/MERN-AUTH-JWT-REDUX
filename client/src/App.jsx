
import { Component , Fragment} from 'react'
import Routers from './components/Routers'
import {UserProvider} from './components/UserProvider'
class App extends Component{
  render() {
    return (
    <Fragment>
      <UserProvider>
        <Routers/>
      </UserProvider>
      </Fragment>
  
  )
  }

}

export default App
