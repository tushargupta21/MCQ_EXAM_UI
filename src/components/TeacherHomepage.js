import React from 'react'
import { Link } from 'react-router-dom'
const TeacherHomepage = () => {
    return (
        <>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link className="nav-link-active" to="/teacherhomepage">Home</Link>

                    <Link className="nav-link mx-10" to="/studentlist">Students List</Link>
                    <Link className="nav-link mx-10" to="/addexam">Host Exam</Link>
                    <Link className="nav-link" to="/">Logout</Link>
                </nav>
            </div>
            <div className="container my-3" style={{backgroundColor: "#80ccff" }} >
                <p>Exams Assigned By You :</p>
                <div class="row">
                    <div class="col-sm-3">
                        <label for="staticEmail2" class="visually-hidden">Subject</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Year & Branch</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Date & Time</label>

                    </div>
                    <div class="col-sm-3">
                        <button type="submit" class="btn btn-primary" style={{backgroundColor:"#0066ff"}} >Edit</button>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-sm-3">
                        <label for="staticEmail2" class="visually-hidden">Subject</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Year & Branch</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Date & Time</label>

                    </div>
                    <div class="col-sm-3">
                        <button type="submit" class="btn btn-primary" style={{backgroundColor:"#0066ff"}} >Edit</button>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default TeacherHomepage
