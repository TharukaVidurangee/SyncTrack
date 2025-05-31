import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

// styles 
import './Sidebar.css'

// images
import AddIcon from '../assets/add_icon.svg'
import DashboardIcon from '../assets/dashboard_icon.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebar-contents">
        
        <div className="user">
          {/* image of the user */}
          <p>Hey User</p>
        </div>

        <nav className="links">
          <ul>
            {/* link to the home page when the logo is been clicked */}
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard-icon" />
                <span >Dashboard</span>
              </NavLink>
            </li>

            {/* link to the create page when the create project icon is clicked */}
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add-new-project"/>
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>

      </div>

    </div>
  )
}
