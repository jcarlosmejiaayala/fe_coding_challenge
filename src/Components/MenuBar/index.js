import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SearchForm from 'Components/SearchForm'

const MenuBar = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Typography align="center" color="inherit" variant="title">
        Fe Coding Challenge
      </Typography>
      <SearchForm />
    </Toolbar>
  </AppBar>
)

export default MenuBar
