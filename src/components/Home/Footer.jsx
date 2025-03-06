import {Link} from 'react-router'

const Footer=()=>{
  return(<footer className="py-3 my-4 footer">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to="#" className="nav-link px-2 ">Home</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 ">Features</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 ">Pricing</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 ">FAQs</Link></li>
      <li className="nav-item"><Link to="#" className="nav-link px-2 ">About</Link></li>
    </ul>
    <p className="text-center ">© 2024 Company, Inc</p>
  </footer>)
}
export default Footer;