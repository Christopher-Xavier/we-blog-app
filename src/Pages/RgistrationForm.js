import React, * as react from 'react';
import {button, form} from 'react'

 export default 
 function Registration(){

 
    render() 
        return (

            <form>
                <h3>Registration Form</h3>

                <div className="form-group">
                    <label type="text" className="form-control" placeholder="First name" />

                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />

                </div>


                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Email address" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Enter Password" />

                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a>"#"sign in</a>
                    </p>
                </div>

            </form>
