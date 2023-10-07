import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] =useState(null);
    const auth = getAuth(app);

    const googleProvider=new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleAuthHandler = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const logginedUser= result.user;
            console.log(logginedUser);
            setUser(logginedUser);
            
        }).catch(err=>{console.log(err)})
    }

    const githubAuthHandler = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    const handleSignOut = ()=>{
        signOut(auth)
        .then((result)=>{
            console.log(result);
            setUser(null);

        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className='login'>
            <h1>Create your account !</h1>
            {
                !user ?
                <>
                    <button onClick={googleAuthHandler} type='button' className='googleBtn'>Login with gmail</button>
                    <button onClick={githubAuthHandler} type='button' className='googleBtn'>Login with github</button>
                </>:
                <button onClick={handleSignOut} type='button' className='googleBtn'>Sign Out</button>
            }
        
            {   user&&
                <div>
                <h3>User : {user.displayName}</h3>
                <h3>Email : {user.email}</h3>
                <img src={user.photoURL
                }></img>
                </div>
            }
        </div>
    );
};

export default Login;