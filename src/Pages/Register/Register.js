import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import icon1 from '../../assets/social-icons/Facebook.png'
import icon2 from '../../assets/social-icons/Google.png'
import icon3 from '../../assets/social-icons/Linkedin.png'

const Register = () => {
    const handleRegister = (event) => {
        event.preventDefault()
        console.log('submitted')
    }

    return (
        <div className="hero mb-5">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className='md:ml-10'>
                    <img src={logo} alt="" />
                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-3">Register Now</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name"
                                name='name'
                                className="input input-bordered" required />
                        </div>
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

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="confirm password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6 mb-3">
                            <button type='submit' className="btn btn-primary">Register</button>
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
                            <p>Already have an account? Please <Link to='/login' className='text-blue-600'>Login</Link> here</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;