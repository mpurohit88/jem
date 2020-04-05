import React from 'react';
import SimpleContainer  from './basic'
import { makeStyles } from '@material-ui/core/styles';
import Square from './tic';
import Checkout from './ravi';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
} ));

export default function App() {
  const classes = useStyles();

  return (
    <Checkout/>
    
     );
}