import React from 'react'
import { Navbar } from '../widgets/layout'
import routes from '../routes'
import Home from './home'

function LandingPage() {
  return (
    <div>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
            <Navbar routes={routes} />
      </div>
      <Home/>
    </div>
  )
}

export default LandingPage
