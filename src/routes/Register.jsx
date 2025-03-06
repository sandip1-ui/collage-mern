import { useRef } from 'react'
import style from './Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register=()=>{
    console.log("i am outside")
     const navigate=useNavigate();
     const name=useRef();
     const email=useRef();
     const password=useRef();
     const confirmPassword=useRef();

     const postData=(event)=>{
        event.preventDefault();
        const postObj=JSON.stringify({
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
            confirmPassword:confirmPassword.current.value,
        })
        console.log(postObj)
        fetch("http://localhost:8080/register",{
            method:"POST",
        body:postObj,
    headers:{"Content-type":"application/json"},} 
        ).then(res=>res.json()).then((data)=>{
            console.log("i am posted...",data)
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
        <div>
            <label className={style.label} htmlFor="confirmPassword">Confirm Password</label>
            <input ref={confirmPassword} className={style.input} type="password" id="confirmPassword" required/>
            <div id="confirmPasswordError" className={style.error}></div>
        </div>
        <button type="submit" className={style.submit_btn}>Register</button>
    </form>
</div>)
}
export default Register;