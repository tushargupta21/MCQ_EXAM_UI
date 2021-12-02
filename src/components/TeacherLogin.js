import React from 'react'
const Teacherlogin = () => {
    return (
        <div>
            <div className="container my-3">

                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">E-mail Address :</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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
                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0066ff"}} >Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Teacherlogin
