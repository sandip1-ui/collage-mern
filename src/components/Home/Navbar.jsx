import style from './Navbar.module.css'
import {Link} from 'react-router'

const Navbar=()=>{
  return( <nav className={style.nav}>
    <div className={style.top}>
        <img src="/logos/logo.svg" alt=""/>
        
        <div className={style.register}>

            <Link to="/login">
                <button className={style.b2}>Log in</button>
            </Link>
            <Link to="/register">
                <button className={style.b1}>Register</button>
            </Link>
        </div>
    </div>
<ul className={style.navbar} >
    
    <li><img src="/logos/home.png" alt="" height="18px"/><Link to="/">Home</Link></li>
    <li><img src="/logos/percent.png" alt="" height="18px"/><Link to="/blogs">Blogs</Link></li>
    <li><img src="/logos/group.png" height="18px" alt=""/><Link to="/about">About</Link></li>
    <li><img src="/logos/contact.svg" alt=""/><Link to="/contact-us">Contact</Link></li>
</ul>

</nav>)
}
export default Navbar;