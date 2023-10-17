import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import toast from 'react-hot-toast';
import GoogleLogin from '../GoogleLogin';

const Register = () => {
  const {user, userSingUp } = useContext(AuthContext);
//   const [passwordError, setPasswordError] = useState('');
const [emailError, setEmailError] = useState('');
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation criteria
    // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    // !passwordPattern.test(password)

    if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
    if (password.length < 6) {
     
        toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long.')
      
      
    }else{
        toast.success('Successfully Register!')
    }

    const user = { name, email, password };
    console.log(user);

    userSingUp(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                {emailError && (
                  <p className="text-xs text-red-600">{emailError}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {/* <p className="text-red-600">{passwordError}</p> */}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <p>
                  Already have an account? please<Link className='text-xl font-bold text-red-600' to='/login'>
                    Login
                  </Link>
                </p>
              </div>
            </form>
            <GoogleLogin></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
