/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Home } from './Home';
import { ParseExcel } from './ParcelExcel/ParseExcel';
import { ReadExcel } from './ReadExcel/ReadExcel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href="/" onClick={<Home/>}>
       Home
      </Link>
      <Link href="./parse-excel" onClick={<ParseExcel/>}>
        Parse_Excel
      </Link>
      <Link href="./multi-excel" onClick={<ReadExcel/>} >
      Multi_Excel
      </Link>
    </Typography>
  );
}
