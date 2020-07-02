import React from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import CodeIcon from '@material-ui/icons/Code';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomePage from "../homePage/homePage";



const useStyles = makeStyles({
 root: {
  flexGrow: 1,
  backgroundColor: '#b24361',
 },
 tabContainer: {
  marginTop: '150px',
  marginBottom: '250px',
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

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

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
     <Tab className={classes.tabIcon} icon={<HomeIcon />}>
      <HomePage />
     </Tab>
     <Tab className={classes.tabIcon} icon={<AccountCircleIcon />} />
     <Tab className={classes.tabIcon} icon={<CodeIcon />} />
     <Tab className={classes.tabIcon} icon={<EmailIcon />} />
    </Tabs>
   </Paper>
  </div>
 )
}
