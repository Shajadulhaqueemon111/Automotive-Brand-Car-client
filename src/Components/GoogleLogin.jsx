import React, { useContext } from 'react';
import { AuthContext } from './Auth/AuthProvider';
import { FcGoogle } from 'react-icons/Fc';
const GoogleLogin = () => {
    const{googleLogin}=useContext(AuthContext)

    const handelGoogle=(media)=>{
        media()
    }
    return (
        <>
        <dir>

        </dir>
        <div>
        <button
        onClick={()=>handelGoogle(googleLogin)}
        className="btn btn-outline btn-secondary text-2xl"><FcGoogle></FcGoogle>Goggle</button>
        </div>
        
        </>
    );
};

export default GoogleLogin;