import React from 'react'

export default function PageNav({ current, onNav }) {
  return (
    <nav className="mobile-page-nav">
      <button onClick={() => onNav('home')} className={current === 'home' ? 'active' : ''}>Home</button>
      <button onClick={() => onNav('about')} className={current === 'about' ? 'active' : ''}>About Me</button>
      <button onClick={() => onNav('projects')} className={current === 'projects' ? 'active' : ''}>Projects</button>
      <button onClick={() => onNav('contact')} className={current === 'contact' ? 'active' : ''}>Contact</button>
    </nav>
  )
}