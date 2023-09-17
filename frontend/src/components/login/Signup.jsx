import React, { useState } from 'react';
import {NavLink,useHistory} from 'react-router-dom';
import '../../styles/signup.css';


const Signup = () => {
    const history = useHistory();
    const [user,SetUser] = useState({name:"",username:"",mobile_no:"",email_id:"",password:"",confirm_password:""})
    
    let name ,value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        SetUser({...user,[name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault();
        const {name,username,mobile_no,email_id,password,confirm_password} = user;
        const res = await fetch('/register',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,username,mobile_no,email_id,password,confirm_password})
        })
        const data = await res.json();
        if(res.status===422 || !data){
            // toast.error("Invalid Registration",{
            //     toastId:"Error1",
            //     theme:'dark'
            // })
        }else{
            // toast.success("Successfully Registered",{
            //     toastId:"Success2",
            //     theme:'dark'
            // })
            history.push('/login');
        }
    }   
    return(
        <>
        <section style={{'background':'black'}} className='sign'>
            <div className='heart'></div>
        <div className='formBx-signup'>
       
            <div className=''>
                
            <h2>Signup</h2>
            <div className="container align-items-center justify-content-center rounded bg-transparent">
            <div className="row-6">
                <form method='POST' action='/signup' autoComplete='off'>
                <div className='col-md-12'>
                    <div className="align-items-center text-center">
                        <img className="rounded-circle" width="150px"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=''/>
                    </div>
                </div>
                <div className="col-md-12 border-right">
                    <div className="">
                        <div className="row-6 mt-2">
                            <div><label className="labels text-black">Name</label><input value={user.fname} onChange={handleInputs} name="name" type="text" className="form-control"/></div>
                            <div><label className="labels text-black">Email Id</label><input value={user.lname} onChange={handleInputs} name="email_id" type="text" className="form-control"/></div>
                            <div><label className="labels text-black">Username</label><input value={user.username} onChange={handleInputs} name="username" type="text" className="form-control"/></div>
                            <div><label className="labels text-black">Mobile Number</label><input value={user.gender} onChange={handleInputs} name="mobile_no" type="number" className="form-control"/></div>
                        </div>
                        <div className="row-6 mt-3">
                            <div><label className="labels text-black">Password</label><input value={user.password} onChange={handleInputs} name="password" type="password" className="form-control"/></div>
                            <div><label className="labels text-black">Confirm Password</label><input value={user.confirmPassword} onChange={handleInputs} name="confirm_password" type="password" className="form-control"/></div>
                        </div>
                        <div className="mt-5 text-center"><button className="bg-dark text12 btn btn-primary" type="button" onClick={PostData}>Signup</button></div><br/>
                        <p>Already have an account? <NavLink className='login' to='/login'>Login</NavLink></p>
                    </div>
                </div>
                </form>
                </div>
            </div>
            {/* <form method='POST' action='/signup' autoComplete='off'>
                <input name='username' type='text' required value={user.username} onChange={handleInputs}/><span>Username </span>
                <input name='age' type='number' required value={user.age} onChange={handleInputs}/><span>Age </span>
                <input name='password' type='password'required value={user.password} onChange={handleInputs}/><span>Password </span>
                <input name='confirmPassword' type='password' required value={user.confirmPassword} onChange={handleInputs}/><span>Confirm Password </span>
                <input type='submit' value='Sign Up' onClick={PostData}></input><br/><br/>
                <p>Already have an account? <NavLink className='login' to='/'>Login</NavLink></p>
            </form>*/}
            </div>
        </div>
        <div className='heart1'></div>
        </section>
        </>
    )
}

export default Signup;