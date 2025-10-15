import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SingUp = () => {
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const handleSingUp = (e) => {
        e.preventDefault()
        // reset 
        setError('')

        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const term = e.target.term.checked
        
        // password validation 
        const lengthCheck = /^.{6,}$/
        const caseCheck = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        const specialCharCheck = /(?=.*[!@#$%...])/
        if (!lengthCheck.test(password)) {
            setError("Password should be 6 charecters or more")
            return
        }
        if (!caseCheck.test(password)) {
            setError("Password must contain at least one uppercase and one lowercase letter.")
            return
        }
        if (!specialCharCheck.test(password)) {
            setError("Must contain at least one special character.")
            return
        }
        console.log("singUP", email, name, password,term)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">SingUp now!</h1>
                        <form onSubmit={handleSingUp} >
                            <fieldset className="fieldset">
                                {/* Name */}
                                <label className="label">Name</label>
                                <input required name='name' type="text" className="input" placeholder=" Name" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Email" />
                                {/* password */}
                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input required name='password' type={show ? "text" : "password"} className="input" placeholder="Password" />
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setShow(!show)
                                    }} className='btn btn-xs absolute top-6 right-2'>{show ? <FaEyeSlash /> : <FaEye />}</button>
                                </div>

                                <p className='text-red-400'>
                                    {error}
                                </p>
                                {/* checkBok */}
                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                    <legend className="fieldset-legend">Terms & Conditions</legend>
                                    <label className="label">
                                        <input name='term' type="checkbox"  className="checkbox" />
                                        Check me
                                    </label>
                                </fieldset>

                                <button className="btn btn-neutral mt-4">Sing Up</button>
                                <p>Already Have Account? Please <Link className='text-blue-400 hover:text-blue-700' to={"/singIn"}>Sing In</Link> </p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;