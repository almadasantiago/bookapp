import { Outlet, Link, useLocation } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="layout">
      <nav className="layout-nav">
        <Link to="/" className="layout-logo">
          <span>&#128214;</span>
          <span>BookApp</span>
        </Link>

        <div className="layout-links">
          <Link
            to="/"
            className="layout-link"
            data-active={location.pathname === '/' || undefined}
          >
            Mi Lista
          </Link>
          <Link
            to="/chat"
            className="layout-link"
            data-active={location.pathname === '/chat' || undefined}
          >
            Chat
          </Link>
        </div>
      </nav>

      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  )
}
