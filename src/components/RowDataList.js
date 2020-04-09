import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const max_height = window.innerHeight - 80;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		maxHeight: `${max_height}px`,
		overflow: 'auto',
	},
}));

function CustomListItem(props) {
	const text = `${props.data.orderNumber} ${props.data.count}шт. ${props.data.userName} ${props.data.dateTime.toLocaleString()}`;
	return (
		<ListItem>
			<ListItemText primary={text}/>
		</ListItem>
	);
}

const RowDataList = (props) => {

	const classes = useStyles();

	const data = props.data;
	data.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));

	return (
		<div className={classes.root}>
			<List dense>
				{
					data.map(obj =>
						<CustomListItem key={obj["_id"]} data={obj}/>
					)
				}
			</List>
		</div>
	);

};

export default RowDataList;