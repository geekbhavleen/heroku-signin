import React from 'react';
import App from '../App';

const SignUp = () => {
  return (
    <App>
      <form>
        <div className="customBorder my-2 py-3">
          <div className="form-group font-weight-bold px-4">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control form-control-sm" placeholder="Enter Name" autoComplete="off"
              autoCapitalize="on" />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="form-control form-control-sm" placeholder="Enter Email"
              autoComplete="off" />
            <small className="form-text text-muted">Your email will not be shared with anyone</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="number">Number</label>
            <input type="text" name="number" id="number" className="form-control form-control-sm" placeholder="9911223344"
              pattern="[0-9]{10}" />
            <small className="form-text text-muted">Only Numric Values allowed with length of 10 characters.</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="form-control form-control-sm" />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="confirm-pass">Confirm Password</label>
            <input type="password" name="confirm-pass" id="confirm-pass" className="form-control form-control-sm" />
          </div>

          <div className="text-center py-2 px-4">
            <button className="btn btn-outline-danger btn-block"> Submit</button>
          </div>
        </div>
      </form>
    </App>
  );

};

export default SignUp;