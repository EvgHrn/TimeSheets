import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const DetailTable = (props) => {

	return (
		<Dialog onClose={props.handleClose} aria-labelledby="simple-dialog-title" open={props.isOpen}>
			<DialogTitle id="simple-dialog-title">{props.data.orderNumber}</DialogTitle>
		</Dialog>
	);

};

export default DetailTable;