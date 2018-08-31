import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import FollowersList from 'Components/FollowersList'
import { Consumer } from 'Store'

const styles = {
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 500
  },
  button: {
    marginBottom: 10
  }
}

const RenderShowMoreButton = ({
  followersTotal,
  currentFollowersCount,
  ...props
}) =>
  currentFollowersCount < followersTotal && (
    <Button variant="contained" color="secondary" {...{ ...props }}>
      Show more
    </Button>
  )

const Followers = ({
  user,
  followers,
  handleOnClickUpdateFollowers,
  classes
}) => (
  <Grid container direction="column" className={classes.root}>
    <RenderShowMoreButton
      followersTotal={user.followers}
      currentFollowersCount={followers.length}
      onClick={handleOnClickUpdateFollowers}
      className={classes.button}
    />
    <FollowersList followers={followers} />
  </Grid>
)

export default Consumer(withStyles(styles)(Followers))
