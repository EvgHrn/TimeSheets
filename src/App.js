import React from 'react';
import logo from './logo.svg';
import './App.css';
import Db from './utils/db';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RowDataList from './components/RowDataList';

const max_height = window.innerHeight - 100;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();

  const [data, setData] = React.useState([]);

  React.useEffect(() => {

    const getData = async () => {
      return await Db.getData();
    };

    getData()
      .then((data) => {
        console.log("App got data: ", data);
        setData(data);
      });

  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={classes.paper}>xs=9</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <RowDataList data={data}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
