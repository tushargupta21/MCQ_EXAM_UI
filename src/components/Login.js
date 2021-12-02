import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/teacherlogin">Teacher Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/teachersignup">Teacher Signup</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        <div className="container my-3">
            
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">E-mail address :</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter e-mail" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password :</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Hereby, I assure that all the information I have entered is correct upto my knowledge.</label>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0066ff"}}>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login
