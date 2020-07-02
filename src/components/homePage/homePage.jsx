import React from 'react';
import Sidebar from "../sideNavBar/sidebar";
import { makeStyles } from '@material-ui/core/styles';
import "../../App.css";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
 paper: {
 }
}));

export default function HomePage() {

 const classes = useStyles();

 return (
  <div>
   <Sidebar />
   <Paper elevation={0}
    className={classes.paper}>
    <h1>Hello</h1>
    <h2>I'm Elif</h2>
    <h4>a web developer</h4>
   </Paper>
  </div>
 )
}
