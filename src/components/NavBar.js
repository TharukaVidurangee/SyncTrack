// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// // styles
// import './NavBar.css'

// // images
// import Temple from '../assets/temple.svg'


// export default function NavBar() {
//   return (
//     <div className='navbar'>
//       <ul>
//         {/* logo */}
//         <li className='logo'>
//           <img src={Temple} alt="synctrack logo" />
//         </li>

//         {/* links for login & signup*/}
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Signup</Link></li>

//         {/* logout button */}
//         <li>
//           <button className='btn'>
//             Logout
//           </button>
//         </li>
//       </ul>
//     </div>
//   )
// }




import { Link } from 'react-router-dom'

// styles & images
import './NavBar.css'
import Temple from '../assets/temple.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="dojo logo" />
          <span>The Dojo</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </nav>
  )
}