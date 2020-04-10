import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
	},
});

export default function Table(props) {

	const classes = useStyles();

	let data = props.data;
	data.sort((a, b) => b.orderNumber - a.orderNumber);

	return (
		<TableContainer component={Paper}>
			<MaterialTable className={classes.table} size="medium" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell align="center">Номер заказа</TableCell>
						<TableCell align="center">Кол-во</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, index) => (
						<TableRow key={index} onClick={(event) => props.handleClick(event, row.orderNumber)}>
							<TableCell component="th" scope="row" align="center">
								{row.orderNumber}
							</TableCell>
							<TableCell align="center">{row.count}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</MaterialTable>
		</TableContainer>
	);
}