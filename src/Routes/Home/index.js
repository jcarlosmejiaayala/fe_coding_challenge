import React, { Fragment } from 'react'

import MenuBar from 'Components/MenuBar'
import UserContent from 'Components/UserContent'

/*
* <Home />, route component that matches '/' path.
*/
const Home = () => (
  <Fragment>
    <MenuBar />
    <UserContent />
  </Fragment>
)

export default Home
