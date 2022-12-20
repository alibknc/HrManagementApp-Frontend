import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../../css/Navbar.css';
import { IconContext } from 'react-icons';
import logo from '../../assets/images/logo.svg'
import SubMenu from './SubMenu';

function Navbar() {
    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='nav-menu'>
                    <ul className='nav-menu-items'>
                        <Link to={'/'}>
                            <img src={logo} alt="HR Management App" />
                        </Link>
                        
                        {SidebarData.map((item, index) => {
                            if (item.submenu)
                                return (
                                    <SubMenu key={index} item={item} />
                                );
                            else
                                return (
                                    <li key={index} id={window.location.pathname === item.link ? "active" : ""}>
                                        <Link to={item.link} className="row">
                                            <div className="col-2" id="icon">{item.icon}</div>
                                            <div className="col-10" id="title">{item.title}</div>
                                        </Link>
                                    </li>
                                );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    );
}

export default Navbar;