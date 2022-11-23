import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Buttons } from '../Buttons'
import Logo from '../../assets/Logo1.png'

export default function Navbar() {
  const Navnav = styled.nav`
    background: linear-gradient(
      0deg,
      rgba(22, 158, 113, 0.8239670868347339) 22%,
      rgba(163, 180, 207, 1) 100%
    );
  `
  return (
    <header>
      <Navnav className="navbar navbar-expand-md  rounded ">
        <div className="container-fluid">
          <Link to="/">
            <img src={Logo} alt="Logo" width={150} />
          </Link>
          {Buttons.navButton}
        </div>
      </Navnav>
    </header>
  )
}
