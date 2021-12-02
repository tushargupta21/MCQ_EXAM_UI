import React from 'react'
import { Link } from 'react-router-dom'
const Studenthomepage = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link className="nav-link" to="/">Home</Link>
            </nav>
            <div className="container">
                <div>
                    <p className="my-3" style={{backgroundColor: "#80ccff" }} >Your Upcoming Exams :</p>

                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                            <label for="validationServer01">Name</label>

                        </div>

                        <div class="col-md-2 mb-2">
                            <label for="validationServer02">Duration</label>


                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="validationServer02"> Time </label>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="validationServer02"> Date </label>
                        </div>
                        <div class="col-md-2 mb-2">
                        <Link to="/exampage" class="btn btn-primary btn-sm-2 btn-lg-2 active" role="button" aria-pressed="true"  style={{backgroundColor:"#0066ff"}} >Attempt</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="my-3">Attempted Exams :</p>

                    <div class="form-row">
                        <div class="col-md-3 mb-3">
                            <label for="validationServer01">Name</label>

                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="validationServer02"> Date </label>
                        </div>
                        <div class="col-md-2 mb-2">
                            <label for="validationServer02"> Marks </label>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Studenthomepage
