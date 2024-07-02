import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './UserProvider'
import axios from 'axios'
const Sign = () => {
    const {setCurrentUser} = useContext(UserContext)
    const [input, setInput] = useState({})
    const handleChange = (e) => {
        const {name, value} = e.target
        setInput(input => ({...input, [name]:value}))
        
    }
    const Navigate = useNavigate()
    const handleSubmit =async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/api/auth', input).then(res => {
            setCurrentUser(res.data)
            Navigate('/userList')
        }).catch(err => toast.error(err.message))
    }


    return (
       
            <div>
                <form onSubmit={handleSubmit}>
            
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id='email' type="text" name='email' onChange={handleChange}/>
                    </div>
    
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" name='password' onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                    <div>
                       <p>Not yet account? </p><Link to="/">Register</Link>
                    </div>
                   
                </form>
          
                <ToastContainer/>
            </div>
        
    );
}

export default Sign;
