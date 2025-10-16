import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContex';

const Profile = () => {
    const { user } = use(AuthContext)
    console.log(user)
    const{displayName,photoURL}=user
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    {
                        photoURL?<img
                        src={photoURL}
                        alt={displayName}
                        className="rounded-xl w-20" />:
                        <img className='w-20' src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="user" />
                    }
                </figure>
                <div className="card-body items-center text-center">
                   <div className='flex gap-3'>
                     <h2 className="card-title">{displayName}</h2>
                     <div className={`badge ${user.emailVerified?"badge-primary":"bg-gray-300"}`}>{user.emailVerified?"Verified":"Un-verified"}</div>
                   </div>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <button className="btn btn-success">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;