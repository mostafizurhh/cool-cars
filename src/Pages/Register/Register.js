import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import icon1 from '../../assets/social-icons/Facebook.png'
import icon2 from '../../assets/social-icons/Google.png'
import icon3 from '../../assets/social-icons/Github.png'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { setJwtTokenApi } from '../../jwtTokenApi/jwtTokenApi';


const Register = () => {
    const [error, setError] = useState('')
    const [terms, setTerms] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { providerLogin, createUser, emailVerification, updateUserInfo } = useContext(AuthContext);

    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleFacebookSignin = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleEmailVerification()
                setJwtTokenApi(user)
                toast.success('Please verify your email to register successfully!', { duration: 5000 })
                navigate(from, { replace: true })/* navigate user */
            })
            .catch(error => console.error(error))
    }
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleEmailVerification()
                setJwtTokenApi(user)
                toast.success('Please verify your email to register successfully!', { duration: 5000 })
                navigate(from, { replace: true })/* navigate user */
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                handleEmailVerification()
                setJwtTokenApi(user)
                toast.success('Please verify your email to register successfully!', { duration: 5000 })
                navigate(from, { replace: true })/* navigate user */
            })
            .catch(error => console.error(error))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        if (!/(?=.*[a-z])/.test(password)) {
            setError('Please provide at least 1 lowercase letter')
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please provide at least 1 uppercase letter')
            return
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setError('Please provide at least 1 number')
            return
        }
        if (!/(?=.*[!@#$&*%])/.test(password)) {
            setError('Please provide at least 1 special charecter')
            return
        }
        if (!/.{8}/.test(password)) {
            setError('Password length must be at least 8 charecters')
            return
        }
        if (password !== confirmPassword) {
            setError('Password did not match')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleEmailVerification()
                handleUpdateUserInfo(name, photoURL)
                navigate(from, { replace: true })/* navigate user */
                toast.success('Please verify your email to register successfully!', { duration: 5000 })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleUpdateUserInfo = (name, photoURL) => {
        const info = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserInfo(info)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleTerms = (event) => {
        setTerms(event.target.checked)
    }
    return (
        <div className="hero mb-5">

            <div className="hero-content flex-col md:flex-row-reverse">
                <div className='md:ml-10'>
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-3">Register Now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name"
                                name='name'
                                className="input input-bordered" /* required */ />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="provide your photo url"
                                name='photoURL'
                                className="input input-bordered" /* required */ />
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
                            <input type="password"
                                name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password"
                                name='confirmPassword' placeholder="confirm password" className="input input-bordered" /* required */ />
                        </div>

                        {/*------------------- 
                        display error message 
                        ----------------------*/}
                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        {/* -------------------- */}

                        <div className='form-control'>
                            <div className='flex'>
                                <input onClick={handleTerms} type="checkbox" className="checkbox" />
                                <p className='ml-2'>Accept our <Link to='/terms' className='text-blue-700'>terms and conditions</Link></p>
                            </div>
                        </div>

                        <div className="form-control mt-3 mb-3">
                            <button type='submit' className="btn btn-primary" disabled={!terms}>Register</button>
                        </div>
                        <div>
                            <p>Already have an account? Please <Link to='/login' className='text-blue-600'>Login</Link> here</p>
                        </div>
                    </form>

                    {/*------------------------- 
                    Register with social media  
                    ----------------------------*/}

                    <div className='text-center mb-3'>
                        <p>Or Register with</p>
                        <div className='flex items-center justify-center mt-3 mb-3'>
                            <button onClick={handleFacebookSignin}>
                                <img style={{ height: 45, width: 45 }} src={icon1} alt="" />
                            </button>
                            <button onClick={handleGoogleSignin}>
                                <img className='ml-3' style={{ height: 45, width: 45 }} src={icon2} alt="" />
                            </button>
                            <button onClick={handleGithubSignin}>
                                <img className='ml-3' style={{ height: 40, width: 40 }} src={icon3} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;