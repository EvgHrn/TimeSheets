import React from 'react';
import logo from './logo.svg';
import './App.css';
import Db from './utils/db';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RowDataList from './components/RowDataList';
import Table from "./components/Table";
import DetailTable from "./components/DetailTable";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const calculateResultData = (rowData) => {
  // [
  //   {
  //      orderNumber,
  //     count
  //   }
  // ]
  return rowData.reduce((acc, obj) => {
    const itemObjIndex = acc.findIndex(itemObject => itemObject.orderNumber === obj.orderNumber);
    if(itemObjIndex < 0) {
      acc.push({
        orderNumber: obj.orderNumber,
        count: obj.count
      });
    } else {
      acc[itemObjIndex].count = acc[itemObjIndex].count + obj.count;
    }
    return acc;
  }, []);
};

function App() {

  const classes = useStyles();

  const [data, setData] = React.useState([]);
	const [calculatedData, setCalculatedData] = React.useState([]);
  const [detailTableData, setDetailTableData] = React.useState({});
  const [isDetailTableOpen, setIsDetailTableOpen] = React.useState(false);

  React.useEffect(() => {

    const getData = async () => {
      return await Db.getData();
    };

    getData()
      .then((data) => {
        console.log("App got data: ", data);
	      setCalculatedData(calculateResultData(data));
	      setData(data);
      });

  }, []);

  const handleRowClick = (event, orderNumber) => {
    setDetailTableData({
      orderNumber
    });
    setIsDetailTableOpen(true);
  };

  const handleDetailTableClose = () => {
    setIsDetailTableOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <div className={classes.paper}>
            <Table data={calculatedData} handleClick={handleRowClick}/>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <RowDataList data={data}/>
          </Paper>
        </Grid>
      </Grid>
      <DetailTable data={detailTableData} isOpen={isDetailTableOpen} handleClose={handleDetailTableClose}/>
    </div>
  );
}

export default App;
