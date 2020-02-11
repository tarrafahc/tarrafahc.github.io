import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = props => {
  const navItems = [
    { path: '/', text: 'Início' },
    { path: '/aboutUs', text: 'Sobre nós' },
    { path: '/aboutHack', text: 'Sobre a Cultura Hacker' },
    { path: '/calendar', text: 'Agenda de Atividades' },
  ]

  const renderItems = (navItems, props) =>
    navItems.map(({ path, text }, index) => (
      <li key={index} className={`nav-item ${props.location.pathname === path ? 'active' : ''}`}>
        <Link className="nav-link" to={path}>
          {text}
        </Link>
      </li>
    ))

  return (
    <nav className="navbar navbar-expand-md navbar-default ">
      <div className="navbar-brand">
        <img
          src="https://avatars0.githubusercontent.com/u/4346710?s=200&v=4"
          width="30"
          height="30"
          alt="tarrafa logo"
        />
        <Link to="/">Tarrafa HC</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav justify-content-end">{renderItems(navItems, props)}</ul>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
