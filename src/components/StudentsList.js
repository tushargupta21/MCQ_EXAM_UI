import { blueGrey } from '@material-ui/core/colors'
import React from 'react'
import { Link } from 'react-router-dom'
const StudentsList = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <Link className="nav-link" to="/teacherhomepage">Home</Link>
                    <Link className="nav-link-active mx-10" to="/studentlist">Students List</Link>
                    <Link className="nav-link mx-10" to="/addexam">Host Exam</Link>
                </nav>
            </div>
            <div className="container" style={{backgroundColor: "#80ccff" }} > 
                <p>Add Students</p>
                <form>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="validationServer01">Name :</label>
                            <input type="text" class="form-control is-valid" id="validationServer01" placeholder="Enter student name"  required />
                        </div>

                        <div class="col-md-4 mb-3">
                            <label for="validationServer02">Email :</label>
                            <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Enter e-mail id"  required />

                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="validationServer02">Password :</label>
                            <input type="password" class="form-control is-valid" id="validationServer02" placeholder="Enter password" required />

                        </div>
                    </div>
                    <div class="form-row">

                        <div class="col-md-4 mb-3">
                            <select class="custom-select custom-select-sm">
                                <option selected>Select Year</option>
                                <option value="1">FE</option>
                                <option value="2">SE</option>
                                <option value="3">TE</option>
                                <option value="4">BE</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select class="custom-select custom-select-sm">
                                <option selected>Select Stream</option>
                                <option value="1">Computer</option>
                                <option value="2">IT</option>
                                <option value="3">Civil</option>
                                <option value="4">Mechanical</option>
                                <option value="5">Electrical</option>
                                <option value="6">Printing</option>
                                <option value="7">Other</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-2">
                        <label for="appt">Roll Number :</label>
                   
                        <input type="text" class="mx-3 col-lg-5 is-valid" id="validationServer02" placeholder="Enter roll no" required />

                        </div>
                    </div>

                    <button class="btn btn-primary" type="submit" style={{backgroundColor:"#0066ff"}}>Submit form</button>
                </form>
                <p className="my-3">Added Users :</p>
                <div class="row">
                    <div class="col-sm-3">
                        <label for="staticEmail2" class="visually-hidden">Name</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Email</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Password</label>

                    </div>
                    <div class="col-sm-3">
                        <button type="submit" class="btn btn-primary mb-3" style={{backgroundColor:"#0066ff"}} >Delete</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <label for="staticEmail2" class="visually-hidden">Name</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Email</label>

                    </div>
                    <div class="col-sm-3">
                        <label for="inputPassword2" class="visually-hidden">Password</label>

                    </div>
                    <div class="col-sm-3" >
                        <button type="submit" class="btn btn-primary mb-3" style={{backgroundColor:"#0066ff"}} >Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentsList
