import React, { useState } from 'react';
import App from '../App';
import loadingImg from '../Images/spinner.gif';
import DB from '../DB.json';

const SignIn = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false
  });

  const { email, password, error, loading, didRedirect } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    DB.forEach((i) => {
      if (i.email === email && i.password === password) {
        return console.log(`Be happy, You are logged in MR. ${i.name}`);

      }
    });
    setValues({ ...values, error: error, loading: false });
  };

  const SignInForm = () => {
    return (
      <form onSubmit={submitHandler}>
        <div className="customBorder py-3 my-5">
          <div className="form-group font-weight-bold px-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="form-control form-control-sm"
              onChange={handleChange('email')}
              placeholder="Enter Email"
              autoComplete="off" />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="password">Password</label>
            <input type="password" name="password"
              onChange={handleChange('password')} id="password" className="form-control form-control-sm" />
          </div>

          <div className="text-center py-2 px-4">
            <button className="btn btn-outline-danger btn-block"> Submit</button>
          </div>
        </div>
      </form>
    );
  };

  const loadingMessage = () => {
    return (
      loading && (
        <img style={{
          position: 'absolute',
          zIndex: '1',
          top: '35%',
          left: '35%'
        }} src={loadingImg} alt='loading-gif' />
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-4 offset-4 text-center'>
          <div className='alert alert-warning'
            style={{ display: error ? "" : "none" }}>
            {<strong>error</strong>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <App>
      {loadingMessage()}
      {errorMessage()}
      {SignInForm()}
    </App>
  );

};

export default SignIn;