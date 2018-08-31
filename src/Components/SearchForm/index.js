import React from 'react'
import Button from '@material-ui/core/Button'
import Search from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

import { Consumer } from 'Store'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: 400,
    margin: '10px auto'
  },
  searchIcon: {
    marginRight: 5
  },
  searchTextField: {
    margin: 'auto 10px'
  }
}

const SearchFrom = ({ handleOnSubmit, classes }) => (
  <form onSubmit={handleOnSubmit} className={classes.root}>
    <TextField
      id="search"
      name="search"
      label="Enter a user..."
      className={classes.searchTextField}
    />
    <Button type="submit" variant="outlined">
      <Search className={classes.searchIcon} />
      Search
    </Button>
  </form>
)

export default Consumer(withStyles(styles)(SearchFrom))
