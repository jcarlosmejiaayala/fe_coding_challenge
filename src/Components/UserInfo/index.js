import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { Consumer } from 'Store'

const styles = {
  root: {
    marginLeft: 40
  },
  card: {
    display: 'inline-block'
  },
  details: {
    display: 'inline-flex'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: '1 0 auto'
  },
  avatar: {
    width: 151,
    height: 151
  }
}

/*
* <UserInfo /> shows details about the user in place.
*/
const UserInfo = ({ user: { avatarUrl, login, followers }, classes }) => (
  <div className={classes.root}>
    <Card className={classes.card}>
      <div className={classes.details}>
        <Avatar src={avatarUrl} alt="avatar" className={classes.avatar} />
        <CardContent className={classes.content}>
          <Typography variant="headline">User: {login}</Typography>
          <Typography variant="subheading" color="textSecondary">
            Total of followers: {followers}
          </Typography>
        </CardContent>
      </div>
    </Card>
  </div>
)

export default Consumer(withStyles(styles)(UserInfo))
