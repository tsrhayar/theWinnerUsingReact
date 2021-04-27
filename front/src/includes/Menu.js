import React, { Fragment } from "react"
import {Link, withRouter} from "react-router-dom"
import axios from 'axios'

import toastr from 'toastr'
import "toastr/build/toastr.css"
import API_URL from './../config'

function Menu(props) {

    const isAuthenticated = () => {
        const jwt = localStorage.getItem('jwt_info')
        if(jwt) {
            return JSON.parse(jwt)
        }
        return false
    }

    const signout = () => {
        axios.post(`${API_URL}/user/signout`)
        .then(() => {
            toastr.info('user sign out', 'Next Time', {
                positionClass: "toast-bottom-right",
            })

            localStorage.removeItem('jwt_info')

            props.history.push('/signin')
        })
        .catch(() => {
        })
    }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#">
          theWinner
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {isAuthenticated() && (
                <li className="nav-item active">
                    <Link className="nav-link" to="/dashbord">
                        userSpace <span className="sr-only">(current)</span>
                    </Link>
                </li>
            )}
          </ul>

          <ul className="navbar-nav ml-auto">

        {!isAuthenticated() && (
            <Fragment>
                <li className="nav-item active">
                    <Link className="nav-link" to="/signin">
                        Connexion <span className="sr-only">(current)</span>
                    </Link>
                    </li>
                    <li className="nav-item active">
                    <Link className="nav-link" to="/signup">
                        registre <span className="sr-only">(current)</span>
                    </Link>
                </li>
            </Fragment>  
        )}

        {isAuthenticated() && (
            <li className="nav-item active">
                <span className="nav-link" onClick={signout}>
                logOut
                </span>
            </li>
        )}

          </ul>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Menu);
