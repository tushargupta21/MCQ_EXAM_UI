import React from "react";

const TeacherSignup = () => {
    return (
        <div>
            <div className="container my-3" style={{backgroundColor: "#80ccff" }} >
                <div>
                    <form>
                        <div className="form-group" >
                            <label htmlFor="exampleInputEmail1">Name :</label>
                            <input
                                type="text"
                                className="form-control"

                                aria-describedby="emailHelp"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-groupform-control">
                            <label htmlFor="exampleInputEmail1">College Code :</label>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="emailHelp"
                                placeholder="If you don't have code please contact your college exam administrator."
                            />
                            <small id="passwordHelpBlock" className="form-text text-muted">
                                Your password must be 8-20 characters long, contain letters and numbers and must not contain spaces, special characters or emoji.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">E-mail Address :</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter your email"
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password :</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Hereby, I assure that all the information I have entered is correct upto my knowledge.
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{backgroundColor:"#0066ff"}} >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeacherSignup;
