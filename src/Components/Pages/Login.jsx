import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import toast from 'react-hot-toast';
import GoogleLogin from '../GoogleLogin';

const Login = () => {

    const {userSingIn}=useContext(AuthContext)

    const location=useLocation()
    const navigate=useNavigate()
    console.log('location in the login page',location)
    const handelLogin=(e)=>{
        e.preventDefault()
      
        const email=e.target.email.value 
        const password=e.target.password.value 

        const user={email,password}
        console.log(user)

        userSingIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state:'/')
            toast.success('successfully login')
        })
        .catch(error=>{
            console.log(error)
            toast.error('Firebase: Error (auth/invalid-login-credentials)')
        })

    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">

        <button className="btn btn-primary">Login</button>
        <p>Don't have an account? please<Link className=' font-bold text-red-600' to='/register'> 
      
           
       Register </Link></p>
         
          
        </div>
      </form>
      <GoogleLogin></GoogleLogin>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;