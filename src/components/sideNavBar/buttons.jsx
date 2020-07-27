import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
    backgroundColor: 'transparent',
  },
  socialIcon: {
    marginLeft: '18px',
    width: '20px',
    color: '#363636',
  },
}))

export default function Buttons() {
  const classes = useStyles()

  return (
    <div className="socialIconContainerDiv">
      <Paper elevation={0} className={classes.root} orientation="vertical">
        <GitHubIcon className={classes.socialIcon} />
        <LinkedInIcon className={classes.socialIcon} />
      </Paper>
    </div>
  )
}
