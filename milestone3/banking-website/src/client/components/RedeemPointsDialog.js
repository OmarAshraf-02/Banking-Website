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
import { useDispatch, useSelector } from 'react-redux';
import { payBill, redeemPoints } from '../../store';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../themes';


function RedeemPointsDialog({creditCard}) {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accounts = useSelector((state) => {
    return state.clients[0].accounts;
  })
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(accounts[0].accountNumber);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

    const handleListItemClick = (value) => {
        handleClose(value);
        dispatch(redeemPoints({
            creditCard: creditCard,
            accountNumber: value
        }));
    };

    return (
        <div>
            <Button onClick={handleClickOpen} color="secondary" variant="contained" style={{ marginLeft: '10px' , color: colors.grey[100] }}>
               Redeem
            </Button>
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Choose an account</DialogTitle>
            <List sx={{ pt: 0 }}>
                {accounts.map((account) => (
                    account.status!=='Active'?<></>:
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
        </div>
    );
}


export default RedeemPointsDialog;