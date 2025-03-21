import { useRef, useState } from 'react';
import style from './Login.module.css'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const LogIn=()=>{

  const email=useRef();
  const password=useRef();
  const [see,setSee]=useState(0);

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
      console.log(data)
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
              type={(see) ? "text" : "password"}id="password" 
              
              />
              {see ? <IoMdEye style={{width:'25px',height:'25px'}} className={style.hide} onClick={()=>setSee(!see)}/>:
              (!see) && <IoMdEyeOff style={{width:'25px',height:'25px'}} className={style.hide} onClick={()=>setSee(!see)}/>}
          <div className={style.forgate}>Forgate password?</div>
          </div>
          {error && <p className={style.error_message}>{error}</p>}
          <button type="submit" className={style.login_button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
