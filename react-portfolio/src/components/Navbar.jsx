import React from 'react'

export default function Navbar({ onNav, onToggleSidebar, current }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Toggle sidebar">☰</button>

        {/* On mobile we show the nav in the top bar; on desktop the sidebar contains the nav */}
        <nav className="nav-links">
          <button className={current === 'home' ? 'active' : ''} onClick={() => onNav('home')}>Home</button>
          <button className={current === 'about' ? 'active' : ''} onClick={() => onNav('about')}>About</button>
          <button className={current === 'projects' ? 'active' : ''} onClick={() => onNav('projects')}>Projects</button>
          <button className={current === 'contact' ? 'active' : ''} onClick={() => onNav('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  )
}
