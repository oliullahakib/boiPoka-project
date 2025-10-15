import React from 'react';
import { Link } from 'react-router';

const SingUp = () => {
    const handleSingUp =(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log("singUP",email,name,password)
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
                            <input name='name' type="text" className="input" placeholder=" Name" />
                                {/* email */}
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            {/* password */}
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
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