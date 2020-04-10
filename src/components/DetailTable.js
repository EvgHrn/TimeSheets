import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Paper from "@material-ui/core/Paper";
import MaterialTable from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles({
	table: {
	},
});

const DetailTable = (props) => {

	const classes = useStyles();

	let items = props.data.items;
	items.sort((a, b) => b.dateTime - b.dateTime);

	return (
		<Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={props.isOpen}>
			<DialogTitle align="center">{props.data.orderNumber}</DialogTitle>
			<TableContainer component={Paper}>
				<MaterialTable className={classes.table} size="medium" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell align="center">Дата</TableCell>
							<TableCell align="center">Кол-во</TableCell>
							<TableCell align="center">Имя</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((row, index) => (
							<TableRow key={index} onClick={(event) => props.handleClick(event, row.orderNumber)}>
								<TableCell component="th" scope="row" align="center">
									{new Date(row.dateTime).toLocaleString()}
								</TableCell>
								<TableCell align="center">{row.count}</TableCell>
								<TableCell align="center">{row.userName}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</MaterialTable>
			</TableContainer>
		</Dialog>
	);

};

export default DetailTable;