import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContex';
import { toast } from 'react-toastify';

const SingIn = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { signIn,googleSignIn } = use(AuthContext)
    const [show, setShow] = useState(false)
    const handleSingIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then((res)=>{
                toast.success(`${res?.user?.displayName||""} Login Successfully`);
                e.target.reset();
                navigate(location.state)
            }
            )
            .catch(err =>{ 
                toast.error(err)
            })

    }
    const handleGoogleSignIn =(e)=>{
        e.preventDefault()
        googleSignIn()
        .then( res =>toast.success(`${res?.user?.displayName||""} Login Successfully`)
            
        )
        .catch(err=>toast.error(err.message))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign In Now!</h1>
                        <form onSubmit={handleSingIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input required name='password' type={show ? "text" : "password"} className="input" placeholder="Password" />
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setShow(!show)
                                    }} className='btn btn-xs absolute top-6 right-2'>{show ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sign in</button>
                                <p>New on Our Website? Please <Link className='text-blue-400 hover:text-blue-700' to={"/singUp"}>Sing Up</Link> </p>
                                <div className='flex items-center gap-1'>
                                    <div className='w-1/2 h-px bg-gray-400 '></div>
                                    <p>or</p>
                                    <div className='w-1/2 h-px bg-gray-400 '></div>
                                </div>
                                {/* Google */}
                                <button onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;