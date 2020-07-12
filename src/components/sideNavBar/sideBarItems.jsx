import React from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import { useHistory } from 'react-router-dom';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import CodeIcon from '@material-ui/icons/Code';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomePage from "../homePage/homePage";
import {
 BrowserRouter as Router,
 Link
} from "react-router-dom";



const useStyles = makeStyles({
 root: {
  flexGrow: 1,
    backgroundColor: '#393D3F',
 },
 tabContainer: {
  marginTop: '100px',
  marginBottom: '300px',
 },
 tabIcon: {
  margin: 0,
  padding: 0,
  minWidth: '60px',
  color: '#fff',
 }
});

export default function SideBarItems() {

 const classes = useStyles();
 const [value, setValue] = React.useState(0);
 const history = useHistory()

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 function changeRouteHome() {
  history.push("/");
 }

 return (
  <div>
   <Paper square className={classes.root} elevation={0} >
    <Tabs
     className={classes.tabContainer}
     orientation="vertical"
     variant="scrollable"
     value={value}
     onChange={handleChange}
     indicatorColor="secondary"
     textColor="secondary"
    >
      <Tab className={classes.tabIcon} 
      icon={<HomeIcon />}
      onClick={ changeRouteHome } />
      
     <Tab className={classes.tabIcon} icon={<AccountCircleIcon />} />
     <Tab className={classes.tabIcon} icon={<CodeIcon />} />
     <Tab className={classes.tabIcon} icon={<EmailIcon />} />
    </Tabs>
   </Paper>
  </div>
 )
}
