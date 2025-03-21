import { useRef, useState } from 'react'
import style from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const Register=()=>{
     const [error,setError]=useState();
     const [see,setSee]=useState(0);
     const navigate=useNavigate();
     const name=useRef();
     const email=useRef();
     const password=useRef();

     const postData=async(event)=>{
        event.preventDefault();
        const postObj=JSON.stringify({
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
        })
       await fetch("http://localhost:8080/register",{
            method:"POST",
        body:postObj,
    headers:{"Content-type":"application/json"},} 
        ).then(res=>res.json()).then((data)=>{
            setError(data.msg)
            localStorage.setItem("token",data.token);

            console.log(data);
            if(data.msg===undefined){
              return navigate("/");
            }
        });
     }

  return(<div className={style.container}>
    <h2>Register</h2>
    <form onSubmit={postData}>
        <div>
            <label className={style.label} htmlFor="username">Username</label>
            <input ref={name} className={style.input} type="text" id="username" required/>
            <div id="usernameError" className={style.error}></div>
        </div>
        <div>
            <label className={style.label} htmlFor="email">Email</label>
            <input ref={email} className={style.input} type="email" id="email" required/>
            <div id="emailError" className={style.error}></div>
        </div>
        <div className={style.passworddiv}>
            <label className={style.label} htmlFor="password">Password</label>
            <input ref={password} className={style.input} type={see ? "text" : "password"}id="password" required/>
            {see ? <IoMdEye style={{width:'25px',height:'25px'}} className={style.hide} onClick={()=>setSee(!see)}/>:
            !see && <IoMdEyeOff style={{width:'25px',height:'25px'}} className={style.hide} onClick={()=>setSee(!see)}/>}
            <div id="passwordError" className={style.error}></div>
        </div>
        
        {error && <p className={style.error_message}>{error}</p>}
        <button type="submit" className={style.submit_btn}>Register</button>
    </form>
</div>)
}
export default Register;