import Link from 'next/link'
import GithubIcon from '../components/atoms/Github.svg'
import { useRouter } from 'next/router'

const NavBar = () => {
  const router = useRouter()
  const navItems = [
    { path: '/', text: 'Início' },
    { path: '/aboutUs', text: 'Sobre nós' },
    { path: '/aboutHack', text: 'Sobre a Cultura Hacker' },
    { path: '/activities', text: 'Agenda de Atividades' }
  ]
  const renderItems = (navItems) =>
    navItems.map(({ path, text }, index) => (
      <li key={index} className={`nav-item ${router.pathname === path ? 'active' : ''}`}>
        <Link href={path}>
          <a className="nav-link">
            {text}
          </a>
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
        <Link href="/">Tarrafa HC</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul className="navbar-nav justify-content-end">{renderItems(navItems)}</ul>
      </div>
      <a href="https://github.com/tarrafahc/tarrafahc.github.io" target="_blank" rel="noopener noreferrer">
        {<GithubIcon />}
      </a>
    </nav>
  )
}

export default NavBar
