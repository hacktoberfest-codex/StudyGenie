import React, { useState,useContext } from "react";
import {NavLink,useHistory} from 'react-router-dom';
import '../../styles/login.css'
import {userContext} from '../../App'


const img1 = require('../../images/Butterfly.png')
const Login = () => {
  const history = useHistory();
  const {state,dispatch} = useContext(userContext)
  const [username,SetUsername] = useState('');
  const [password,SetPassword] = useState('');

        const GetData = async (e) => {
        e.preventDefault();
        const res = await fetch('/login',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({username,password})
        })
        const data = await res.json();
        if(res.status===400||!data){
          // window.alert('Invalid Credentials')
          // toast.warn("Invalid Credential",{
          //   theme:"dark"
          // })
        }else if(res.status===201){
          dispatch({type:"USER",payload:true});
          // window.alert('LoggedIn Successfully')
          // toast.success("Login Successful",{
          //   theme:"dark"
          // })
          history.push('/');
        }
        else{
          // window.alert('Invalid')
          // toast.error('invalid',{
          //   theme:"dark"
          // });
        }
  }

    return(
        <>
        <section className="section-login">
        <div className='container'>
          <div className='user signinBx'>
            <div className='imgBx'>
              <div className='sideimg'>
                  <img style={{'width':'120%','height':'100%'}} className="image1" src={img1} alt=''/>
              </div>
            </div>
            <div className='formBx-login'>
              <form method="POST" action="/" autoComplete="off">
                <h2>
                  Log In
                </h2>
                <input name='username' type='text' placeholder='Username' onChange={(e)=>SetUsername(e.target.value)}></input>
                <input name='password' type='password' placeholder='Password' onChange={(e)=>SetPassword(e.target.value)}></input>
                <input type='submit' value='Login' onClick={GetData}></input>
                <p className='signup'>Dont't have an account? <NavLink className='signup' to='/register'>Sign UP</NavLink></p>
              </form>
            </div>
          </div>
          </div>
        </section>
            
        </>
    )

}

export default Login;