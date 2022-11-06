import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import icon1 from '../../assets/social-icons/Facebook.png'
import icon2 from '../../assets/social-icons/Google.png'
import icon3 from '../../assets/social-icons/Github.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { setJwtTokenApi } from '../../jwtTokenApi/jwtTokenApi';

const Login = () => {
    const [error, setError] = useState('')
    const [userEmail, setUserEmail] = useState('')/* forget password */

    /*--------------
     navigate user 
     ---------------*/
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    /*-------------------------------------------------*/

    const { setLoading, providerLogin, loginWithEmail, passwordReset } = useContext(AuthContext);

    /*---------------------
     social media login 
     ----------------------*/
    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleFacebookSignin = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setJwtTokenApi(user)
                /* restrict user to navigate unless email verification */
                if (user.emailVerified) {
                    navigate(from, { replace: true })/* navigate user */
                }
                else {
                    toast.error('Please verify your email first')
                }
            })
            .catch(error => console.error(error))
    }
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setJwtTokenApi(user)
                /* restrict user to navigate unless email verification */
                if (user.emailVerified) {
                    navigate(from, { replace: true })/* navigate user */
                }
                else {
                    toast.error('Please verify your email first')
                }
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignin = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setJwtTokenApi(user)
                /* restrict user to navigate unless email verification */
                if (user.emailVerified) {
                    navigate(from, { replace: true })/* navigate user */
                }
                else {
                    toast.error('Please verify your email first')
                }
            })
            .catch(error => console.error(error))
    }
    /*------------------------------------------------------*/

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)
                setJwtTokenApi(user)
                /* restrict user to navigate unless email verification */
                if (user.emailVerified) {
                    navigate(from, { replace: true })/* navigate user */
                }
                else {
                    toast.error('Please verify your email first')
                }
                setError('')
                form.reset()
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    /*----------------------------
     send forgot password link 
     ----------------------------*/
    const handleEmailBlur = (event) => {
        const email = event.target.value
        setUserEmail(email)
    }

    const handlePasswordReset = () => {
        if (!userEmail) {
            alert('please enter your email address')
            return
        }
        passwordReset(userEmail)
            .then(() => {
                alert('Please check your email to reset password')
            })
            .catch(error => console.error(error))
    }
    /*-----------------------------------------------------*/

    return (
        <div className="hero mb-5">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className='md:ml-10'>
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleFormSubmit} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-3">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="email" placeholder="email"
                                name='email'
                                className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <button onClick={handlePasswordReset} className="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>

                        {/*------------------- 
                        display error message 
                        ----------------------*/}
                        <div className='mt-3 text-red-700'>
                            {error}
                        </div>
                        {/* -------------------- */}

                        <div className="form-control mt-3 mb-3">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>New to our website? Please <Link to='/register' className='text-blue-600'>Register</Link> here</p>
                        </div>
                    </form>

                    {/*----------------------- 
                    Login with social media
                    -------------------------*/}

                    <div className='text-center mb-3'>
                        <p>Or Login with</p>
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

export default Login;