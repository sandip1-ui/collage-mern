import { useRef, useState } from 'react';
import style from './Login.module.css'
import { data } from 'react-router-dom';
const LogIn=()=>{

  const email=useRef();
  const password=useRef();

  const [error,setError]=useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/login",{
      method:"POST",
      body:JSON.stringify({
          email:email.current.value,
          password:password.current.value,
      }),
      headers:{"Content-type":"application/json"}
    }
    ).then(res=>res.json()).then(data=>{
      setError(data.msg);
    })
  };

  return (
    <div className={style.container}>
      <div className={style.login_box}>
        <h2 className={style.title}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.input_group}>
            <label>Email</label>
            <input
              ref={email}
              type="email"
              
              />
          </div>
          <div className={style.input_group}>
            <label>Password</label>
            <input
              ref={password}
              type="password"
              
              />
          </div>
          {error && <p className={style.error_message}>{error}</p>}
          <button type="submit" className={style.login_button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
