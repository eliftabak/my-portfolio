import React from 'react'
import Sidebar from '../../components/sideNavBar/Sidebar'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import '../../App.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: 'transparent',
    marginLeft: '10%',
    marginTop: '15%',
    position: 'absolute',
    lineHeight: '3em',
    color: '#fff',
    width: '40%',
    fontFamily: "'Domine', serif",
  },
  header: {
    fontFamily: "'Domine', serif",
    fontSize: '4rem',
    lineHeight: '1em',
  },
}))

function HomePage() {
  const classes = useStyles()

  return (
    <div>
      <Sidebar />
      <Paper elevation={0} className={classes.paper}>
        <h1 className={classes.header}>I'm Elif</h1>
        <h3>
          a full-stack web developer based in Istanbul,Turkey. I have a passion
          for web design and love to create new sites. I have a good knowledge
          of ChanginText
        </h3>
      </Paper>
    </div>
  )
}

export default withRouter(HomePage)
