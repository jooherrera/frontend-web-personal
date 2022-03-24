import aboutIcon from './person-fill.svg'
import resumeIcon from './journal-text.svg'
import workdIcon from './code-slash.svg'
import netIcon from './at.svg'

import './Navbar.css'
import { NavbarBtn } from './NavbarBtn'
import { NavLink } from 'react-router-dom'

export const NavbarUI = () => {
  return (
    <>
      <div className="Navb">
        <NavLink className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} to="/about">
          <NavbarBtn img={aboutIcon} text={'About'} />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} to="/resume">
          <NavbarBtn img={resumeIcon} text={'Resume'} />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} to="/works">
          <NavbarBtn img={workdIcon} text={'Works'} />
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'isActive' : 'notActive')} to="/contact">
          <NavbarBtn img={netIcon} text={'Contact'} />
        </NavLink>
      </div>
    </>
  )
}
