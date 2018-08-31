import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Followers from 'Components/Followers'
import UserInfo from 'Components/UserInfo'
import { Consumer } from 'Store'

const styles = {
  content: {
    marginTop: 40
  }
}

const UserContent = ({ user, classes }) =>
  !!Object.keys(user).length && (
    <Grid container direction="row" className={classes.content}>
      <UserInfo />
      <Followers />
    </Grid>
  )

export default Consumer(withStyles(styles)(UserContent))
