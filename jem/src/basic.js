import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from './componant/Input'
import cButton from './componant/cButton';
import XYZ from './componant/XYZ';
import Button from '@material-ui/core/Button';
import client from './componant/client'
// class App extends Component {
// constructor(props){
//   super(props);
//   this.state = { apiResponse: " " };
// }

// callAPI(){
//   fetch("http://localhost:5000/")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }));
// }

// componentWillMount(){
//   this.callAPI();
// }
// }

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
     flexWrap: 'wrap',
 flexGrow: 1,
  },
  textField: {
    
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: '50ch',
  },
  control: {
    padding: theme.spacing(2),
  },
} ));


export default function SimpleContainer() {
    const classes = useStyles();
 return (
    <div className={classes.root}>
         <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={3}>
      <center><Grid container 
       direction="row"
       justify="center"
       alignItems="center"
      spacing={3}>
        <Grid container item xs={6} spacing={1}>
          <Input 
           label="Product_code"
          id="filled-margin-none"
          defaultValue="Code"
          //variant="filled"
        /></Grid>
        <Grid container item xs={6} spacing={1}>
         <Input 
           label="Product_Name"
          id="filled-margin-none"
          defaultValue="name"
          //variant="filled"
        /></Grid>
       <Grid container item xs={6} spacing={1}>
         <Input 
           label="Product_Name"
          id="filled-margin-none"
          defaultValue="name"
          //variant="filled"
        /></Grid>
         <Grid container item xs={6} spacing={1}>
        <Input 
           label="Product_Name"
          id="filled-margin-none"
          defaultValue="name"
          //variant="filled"
        /></Grid>
        <Grid container item xs={6} spacing={1}>
        <Input 
           label="Product_Name"
          id="filled-margin-none"
          defaultValue="name"
          //variant="filled"
        /></Grid>



<Grid container item xs={6} spacing={1}>
        <XYZ Label = "Submit" />
          {/* variant="filled" */}
        
        </Grid>
      </Grid>
      </center>
      
      </Grid>

     
    </div>
  );
}
