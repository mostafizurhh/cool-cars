import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import icon1 from '../../assets/social-icons/Facebook.png'
import icon2 from '../../assets/social-icons/Google.png'
import icon3 from '../../assets/social-icons/Linkedin.png'

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        console.log('submitted')
    }

    return (
        <div className="hero mb-5">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className='md:ml-10'>
                    <img src={logo} alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-3">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email"
                                name='email'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 mb-3">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div className='text-center'>
                            <p>Or Login with</p>
                            <div className='flex items-center justify-center mt-3 mb-3'>
                                <button>
                                    <img style={{ height: 45, width: 45 }} src={icon1} alt="" />
                                </button>
                                <button>
                                    <img className='ml-3' style={{ height: 45, width: 45 }} src={icon2} alt="" />
                                </button>
                                <button>
                                    <img className='ml-3' style={{ height: 45, width: 45 }} src={icon3} alt="" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>New to our website? Please <Link to='/register' className='text-blue-600'>Register</Link> here</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;