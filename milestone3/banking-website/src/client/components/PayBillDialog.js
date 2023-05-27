import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { payBill } from '../../store';


function PayBillDialog(props) {
    const dispatch = useDispatch();

    const { onClose, selectedValue, open, accounts, params } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
        dispatch(payBill({
            bill: params.row,
            accountNumber: value
        }));
    };

    return (
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Choose an account</DialogTitle>
        <List sx={{ pt: 0 }}>
            {accounts.map((account) => (
            <ListItem disableGutters>
                <ListItemButton onClick={() => handleListItemClick(account.accountNumber)} key={account.id}>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={account.accountNumber} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Dialog>
    );
}


export default PayBillDialog;