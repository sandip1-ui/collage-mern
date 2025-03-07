import { useRef, useState } from 'react'
import style from './Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register=()=>{
     const [error,setError]=useState();
     const navigate=useNavigate();
     const name=useRef();
     const email=useRef();
     const password=useRef();

     const postData=(event)=>{
        event.preventDefault();
        const postObj=JSON.stringify({
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
        })
        fetch("http://localhost:8080/register",{
            method:"POST",
        body:postObj,
    headers:{"Content-type":"application/json"},} 
        ).then(res=>res.json()).then((data)=>{
            setError(data.msg)
        });
       //return navigate("/");
     }

  return(<div className={style.container}>
    <h2>Register</h2>
    <form method='POST' onSubmit={postData}>
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
        <div>
            <label className={style.label} htmlFor="password">Password</label>
            <input ref={password} className={style.input} type="password" id="password" required/>
            <div id="passwordError" className={style.error}></div>
        </div>
        
        {error && <p className={style.error_message}>{error}</p>}
        <button type="submit" className={style.submit_btn}>Register</button>
    </form>
</div>)
}
export default Register;