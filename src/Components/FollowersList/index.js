import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
})

const FollowersList = ({ followers, classes }) => (
  <List className={classes.root}>
    {followers.map(({ avatarUrl, login }) => (
      <ListItem key={login}>
        <Avatar src={avatarUrl} />
        <ListItemText primary={login} secondary="Follower" />
      </ListItem>
    ))}
  </List>
)

export default withStyles(styles)(FollowersList)
