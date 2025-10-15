import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SingIn = () => {
     const [show, setShow] = useState(false)
    const handleSingIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log("singIn", email, password)

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Singin now!</h1>
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
                                <button className="btn btn-neutral mt-4">Sing in</button>
                                <p>New on Our Website? Please <Link className='text-blue-400 hover:text-blue-700' to={"/singUp"}>Sing Up</Link> </p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingIn;