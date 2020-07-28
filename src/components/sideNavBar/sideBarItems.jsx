import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import '../../App.css'
import { useHistory } from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import HomeIcon from '@material-ui/icons/Home'
import EmailIcon from '@material-ui/icons/Email'
import CodeIcon from '@material-ui/icons/Code'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../../App.css'
import './Sidebar.css'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#363636',
  },
  tabContainer: {
    marginTop: '100px',
    marginBottom: '300px',
  },
  navIcons: {
    fontSize: '30px',
  },
})

export default function SideBarItems() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const history = useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function changeRouteHome() {
    history.push('/')
  }

  return (
    <div className="navigationIconsContainer">
      <ul>
        <li>
          <HomeIcon className={classes.navIcons} />
        </li>
        <li>
          <AccountCircleIcon className={classes.navIcons} />
        </li>
        <li>
          <CodeIcon className={classes.navIcons} />
        </li>
        <li>
          <EmailIcon className={classes.navIcons} />
        </li>
      </ul>
    </div>
  )
}
