import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Login = () => {
const [userData, setUserData] = useState({})
const Navigate = useNavigate()
const handleChange = (e) => {
    const {name, value} = e.target
     setUserData((user) => ({...user, [name]:value}))
}


const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:8000/api/register', userData).then(res => {
        toast.success("registered successfully")
    }).then(Navigate('/sign')).catch(err => toast.error(err.message))
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" name='name' onChange={handleChange}/>
                </div>
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
                   <p>Already have an account? </p><Link to="/sign">Sign In</Link>
                </div>
               
            </form>
            <ToastContainer/>
        </div>
    );
}

export default Login;
