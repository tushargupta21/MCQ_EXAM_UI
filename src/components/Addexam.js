import React from "react";
import { Link } from "react-router-dom";
const Addexam = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="nav-link" to="/teacherhomepage">
                    Home
                </Link>
            </nav>
            <div className="container" style={{backgroundColor: "#80ccff" }} >
                <form>
                    <div className="form-row my-3">
                        <div class="col-md-3 mb-2">
                            <label for="appt">Subject Name </label>
                            <input
                               
                                className="mx-3 col-lg-5 disabled"
                                
                                type="text"
                                id="appttext"
                                name="appt"
                            />
                        </div>
                        <div class="col-md-3 mb-3">
                            <select class="custom-select custom-select-sm">
                                <option selected>Select Year</option>
                                <option value="1">FE</option>
                                <option value="2">SE</option>
                                <option value="3">TE</option>
                                <option value="4">BE</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <select class="custom-select custom-select-sm">
                                <option selected>Select Stream</option>
                                <option value="1">Computer</option>
                                <option value="2">Mechanical</option>
                                <option value="3">Civil</option>
                                <option value="4">IT</option>
                                <option value="5">Electrical</option>
                                <option value="6">Printing</option>
                                <option value="7">Other</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="appt">Total Marks: </label>
                            <input
                                readOnly={true}
                                className="mx-3 col-lg-5 disabled"
                                value="0"
                                type="text"
                                id="appttext"
                                name="appt"
                            />
                        </div>
                    </div>

                    <div class="form-row my-3">
                        <div class="col-md-3 mb-3">
                            <label for="appt">Start time: </label>
                            <input className="mx-3" type="time" id="appt" name="appt" />
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="appt">End time: </label>
                            <input className="mx-3" type="time" id="appt" name="appt" />
                        </div>

                        <div class="col-md-3 mb-3">
                            <label for="appt">Date: </label>
                            <input className="mx-3" type="date" id="appt" name="appt" />
                        </div>
                        <div class="col-md-3 mb-2">
                            <label for="appt">Duration: </label>
                            <input
                                readOnly={true}
                                className="mx-3 col-lg-5 disabled"
                                value="0 mins"
                                type="text"
                                id="appttext"
                                name="appt"
                            />
                        </div>
                    </div>

                    <div>
                        <p>
                            <a
                                className="btn btn-primary col-sm-2 col-lg-2"
                                data-toggle="collapse"
                                href="#multiCollapseExample1"
                                role="button"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample1"
                                style={{backgroundColor:"#0066ff"}} 
                            >
                                Add Question
                            </a>
                        </p>
                        <div className="row">
                            <div className="col">
                                <div className="collapse collapse" id="multiCollapseExample1">
                                    <form>
                                        <div className="form-group">
                                            <div class="form-row my-3">
                                                <div class="col-md-3 mb-3">
                                                    <label for="appt">Question no-x </label>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label for="appt">Total Marks: </label>
                                                    <input
                                                        readOnly={true}
                                                        className="mx-3 col-lg-5 disabled"
                                                        value="0"
                                                        type="text"
                                                        id="appttext"
                                                        name="appt"
                    option/>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                    <label for="appt">Total Time: </label>
                                                    <input
                                                        readOnly={true}
                                                        className="mx-3 col-lg-5 disabled"
                                                        value="0"
                                                        type="text"
                                                        id="appttext"
                                                        name="appt"
                                                    />
                                                </div>
                                                <div class="col-md-2 mb-2">
                                                    <select class="custom-select custom-select-sm">
                                                        <option selected>Correct Option</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="question"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Option1</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="option"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Option2</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="option"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Option3</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="option"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Option4</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="option"
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0066ff"}} >
                                            Save
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="my-2" >Added Questions :</p>
                    </div>
                    <button class="btn btn-primary my-3" type="submit" style={{backgroundColor:"#0066ff"}} >
                        Add Exam
                    </button>
                </form>
            </div>
        </>
    );
};

export default Addexam;
