import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/arin_logo.png'
import { FaAlignJustify } from 'react-icons/fa6';
import { Menu, Dropdown } from 'antd';
import '../scss/Navbar.scss';

const menuStyle = {
  textDecoration: "none",
  fontSize: "17px"
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceMenu, setIsServiceMenu] = useState(false);
  const [isMediaMenu, setIsMediaMenu] = useState(false);
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMediaMenuOpen, setIsMediaMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleServiceMenuOpen = () => {
    setIsServiceMenuOpen(true);
  };

  const handleServiceMenuClose = () => {
    setIsServiceMenuOpen(false);
  };

  const handleMediaMenuOpen = () => {
    setIsMediaMenuOpen(true);
  };

  const handleMediaMenuClose = () => {
    setIsMediaMenuOpen(false);
  };

  const serviceDropDown = (
    <Menu visible={isServiceMenuOpen} onClick={handleServiceMenuClose}>
      <Menu.Item key="shipping">
        <NavLink to={"/services/shipping"} onClick={toggleMenu} style={menuStyle}>
          SHIPPING
        </NavLink>
      </Menu.Item>
      <Menu.Item key="delivery">
        <NavLink to={"/services/pick-up"} onClick={toggleMenu} style={menuStyle}>
          PICKUP AND DELIVERY
        </NavLink>
      </Menu.Item>
      <Menu.Item key="packaging">
        <NavLink to={"/services/package"} onClick={toggleMenu} style={menuStyle}>
          PACKAGING
        </NavLink>
      </Menu.Item>
      <Menu.Item key="door">
        <NavLink to={"/services/door-to-door"} onClick={toggleMenu} style={menuStyle}>
          DOOR TO DOOR
        </NavLink>
      </Menu.Item>
      <Menu.Item key="warehouse">
        <NavLink to={"/services/warehouse"} onClick={toggleMenu} style={menuStyle}>
          WAREHOUSE FACILITY(USA)
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  const mediaDropDown = (
    <Menu visible={isMediaMenuOpen} onClick={handleMediaMenuClose}>
      <Menu.Item key="video">
        <NavLink to={"/media/video"} onClick={toggleMenu} style={menuStyle}>
          VIDEO
        </NavLink>
      </Menu.Item>
      <Menu.Item key="images">
        <NavLink to={"/media/images"} onClick={toggleMenu} style={menuStyle}>
          IMAGES
        </NavLink>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav id="navbar">
      <NavLink to={'/'}>
        <img src={logo} alt="no image" />
      </NavLink>
      <div className="content-container">
        
        <div className="content">
          <ul className={`links ${isMenuOpen ? 'open' : ''}`} style={{ zIndex: '3' }}>
            <li>
              <NavLink to={"/"} onClick={toggleMenu}>
                    HOME
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={toggleMenu}>
                    ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"}   
                onMouseEnter={handleServiceMenuOpen}              
                // onMouseEnter={() => setIsServiceMenu(true)}
                // onMouseLeave={() => setIsServiceMenu(false)}
              >
                <Dropdown overlay={serviceDropDown}
                //  open={isServiceMenu} 
                 placement="bottomLeft" >
                  <span>SERVICES <i className="bi bi-caret-down-fill" style={{fontSize: "12px"}}></i></span>
                </Dropdown>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/latestBlogs"} onClick={toggleMenu}>
                BLOGS
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"}       
                onMouseEnter={handleMediaMenuOpen}          
              >
                <Dropdown overlay={mediaDropDown} placement="bottomLeft" >
                  <span>MEDIA <i className="bi bi-caret-down-fill" style={{fontSize: "12px"}}></i></span>
                </Dropdown>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/clients"} onClick={toggleMenu}>
                CLIENTS
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={toggleMenu}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <div className="nav-btn" onClick={toggleMenu}>
            <FaAlignJustify />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

