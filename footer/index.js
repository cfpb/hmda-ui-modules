import React from 'react'

const Footer = () => {
  return (
    <footer className="Footer usa-footer usa-footer-slim" role="contentinfo">
      <div className="usa-grid usa-footer-return-to-top">
        <a href="#">Return to top</a>
      </div>
      <div className="usa-footer-primary-section">
        <div className="usa-grid-full">
          <nav className="usa-footer-nav usa-width-one-half">
            <ul className="usa-unstyled-list">
              <li className="usa-footer-primary-content">
                <a className="usa-nav-link" href="/" aria-label="Home">
                  <img alt="FFIEC" src="/img/ffiec-logo.svg" height="21" />
                  Home Mortgage Disclosure Act
                </a>
              </li>
            </ul>
          </nav>
          <div className="usa-width-one-half">
            <h4>Resources</h4>

            <ul className="usa-unstyled-list">
              <li>
                <a href="https://www.ffiec.gov/hmda/">FFIEC HMDA Website</a>
              </li>
              <li>
                <a href="https://www.federalregister.gov/documents/2015/10/28/2015-26607/home-mortgage-disclosure-regulation-c">
                  HMDA Final Rule
                </a>
              </li>
              <li>
                <a href="https://www.consumerfinance.gov/policy-compliance/guidance/implementation-guidance/hmda-implementation/">
                  Regulatory Implementation Resources
                </a>
              </li>
              <li>
                <a href="mailto:hmdahelp@cfpb.gov">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
