import React, {Fragment, useState} from 'react'
import Header from './../includes/Header'
import API_URL from './../config'
import axios from 'axios'
import toastr from 'toastr'
import "toastr/build/toastr.css"

function Signup(props) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    const submitSignUp = (e) => {
        e.preventDefault();
        // fetch(`${API_URL}/user/signup`, {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res => res.json())
        // .then(res => {
        //     if(res.error) {
        //          toastr.error(res.error, 'please check your form', {
        //             positionClass: "toast-bottom-right",
        //         })
        //         return
        //     }
        //     toastr.success('User is created successfully', 'New account has created', {
        //         positionClass: "toast-bottom-right",
        //     })
        //     props.history.push('/signin')
        // })
        // .catch(err => toastr.warning(err, 'server error', {
        //     positionClass: "toast-bottom-top",
        // }))

        axios.post(`${API_URL}/user/signup`, user)
        .then((res) => {
            console.log(res)
            toastr.success('User is created successfully', 'New account has created', {
                positionClass: "toast-bottom-right",
            })
            props.history.push('/signin')
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
        <form onSubmit={submitSignUp}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={handleChange} className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label  htmlFor="email">Email address</label>
                <input type="email" onChange={handleChange} className="form-control" id="email" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label  htmlFor="password">Password</label>
                <input type="password" onChange={handleChange} className="form-control" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label  htmlFor="confirmPass">confirmer votre Password</label>
                <input type="password" onChange={handleChange} className="form-control" id="confirmPass" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Registre</button>

            { JSON.stringify(user) }
        </form>
    )

    return (
        <Fragment>
            <Header
            title="Sign up"
            description="Sign up user"
            className="container"
            >
            
            {form()}
            </Header>
        </Fragment>
    )
}

export default Signup
