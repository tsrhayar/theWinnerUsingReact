import React, {Fragment, useState} from 'react'
import Header from './../includes/Header'
import API_URL from './../config'
import axios from 'axios'
import toastr from 'toastr'
import "toastr/build/toastr.css"

function Signin(props) {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    const submitSignIn = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/user/signin`, user)
        .then((res) => {
            console.log(res.data)
            toastr.success('Welcome', 'authenticated', {
                positionClass: "toast-bottom-right",
            })
            localStorage.setItem('jwt_info', JSON.stringify(res.data))
            props.history.push('/dashbord')
        })
        .catch(err => {
            if(err.response.data) {
                 toastr.error(err.response.data.error, 'please check your form', {
                    positionClass: "toast-bottom-right",
                })
                return
            }
        })
    }

    const form = () => (
        <form onSubmit={submitSignIn}>
            <div className="form-group">
                <label  htmlFor="email">Email address</label>
                <input type="email" onChange={handleChange} className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label  htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>

            { JSON.stringify(user) }
        </form>
    )

    return (
        <Fragment>
            <Header
            title="Sign in"
            description="Sign in user"
            className="container"
            >
            {form()}

            </Header>
        </Fragment>
    )
}

export default Signin
