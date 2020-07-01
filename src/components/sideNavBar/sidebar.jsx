import React from 'react';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from "@material-ui/icons/PersonPin";
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles({
 root: {
  flexGrow: 1,
  height: "100%",
  paddingTop: '200px',
  paddingBottom: '200px',
 },
 tabIcon: {
  margin: 0,
  padding: 0,
  minWidth: '60px',
 },
});



export default function Sidebar() {

 const classes = useStyles();
 const [value, setValue] = React.useState(0);

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 return (
  <div className="sidenav">
   <Paper square className={classes.root}>
    <Tabs
    className={classes.tabContainer}
     orientation="vertical"
     variant="scrollable"
     value={value}
     onChange={handleChange}
     indicatorColor="secondary"
     textColor="secondary"
    >
     <Tab className={classes.tabIcon} icon={<HomeIcon />} />
     <Tab className={classes.tabIcon} icon={<PersonPinIcon />} />
     <Tab className={classes.tabIcon} icon={<EmailIcon />} />
    </Tabs>
   </Paper>
  </div>
 )
}
