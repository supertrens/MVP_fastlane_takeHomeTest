import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Heros from '../components/heros'
import LandingPage from '../components/landing_page'
import Services from '../components/services'
import '../sass/main.scss';
import '../css/icon-font.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="MVP Fastlane"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <LandingPage />
    <Services />
    <Heros />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
