import React ,{useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { toast} from "react-toastify";
import { userContext } from "../App";

const Logout = () => {
    const history = useNavigate();
    const {state,dispatch} = useContext(userContext)

    const Logout = async () => {
        try {
            const res = await fetch('/logout',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })
            if(res.status!=200){
                toast.error('Invalid',{
                    toastId:"error1"
                })
            }else{
                dispatch({type:"USER",payload:false});
                toast.success("LogOut Successful",{
                    toastId:"Success"
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        Logout();
        history('/login')
    },[])
    return(
        <></>
    )
}

export default Logout;