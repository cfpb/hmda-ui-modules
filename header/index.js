import React from 'react'
import BannerUSA from './BannerUSA.jsx'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Filing', href: '/filing/' },
  { name: 'Data Publication', href: '/data-publication/' },
  { name: 'Tools', href: '/tools/' }
]

const Header = () => {
  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <header
        className="hmda-header usa-header usa-header-basic"
        role="banner"
      >
        <BannerUSA />
        <div className="usa-nav-container">
          <div className="usa-logo" id="logo">
            <em className="usa-logo-text">
              <a className="usa-nav-link" href="/" aria-label="Home">
                <img alt="FFIEC" src="/img/ffiec-logo.svg" height="32" />
                Home Mortgage Disclosure Act
              </a>
            </em>
          </div>
          <nav className="usa-nav">
            <ul className="usa-nav-primary">
              {links.map(link => {
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="usa-nav-link"
                      target={link.name === 'Filing' ? '_blank' : null}
                      rel={
                        link.name === 'Filing' ? 'noopener noreferrer' : null
                      }
                    >
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
