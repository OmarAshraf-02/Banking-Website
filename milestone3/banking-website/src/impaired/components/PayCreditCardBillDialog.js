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
import { payBill, payCreditCardBill, redeemPoints } from '../../store';
import { useState } from 'react';
import { Box, Button, FormControl, InputLabel, Select, TextField } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../themes';
import { MenuItem } from '@mui/material';


function PayCreditCardBillDialog({ creditCard }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const accounts = useSelector((state) => {
    return state.clients[0].accounts;
  });

  const dispatch = useDispatch();
  const [selectedAccount, setSelectedAccount] = useState(accounts[0].accountNumber);
  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const [partialAmount, setPartialAmount] = useState(creditCard.limit - creditCard.balance);
  const handlePartialAmountChange = (event) => {
    setPartialAmount(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayBill = () => {
    handleClose();
    var amount = creditCard.limit - creditCard.balance;
    if (paymentMethod === 'Pay Partially') {
      amount = partialAmount;
    }
    // console.log(partialAmount)
    dispatch(
      payCreditCardBill({
        creditCard: creditCard,
        accountNumber: selectedAccount,
        amount: amount
      })
    );
  };

  const [paymentMethod, setPaymentMethod] = React.useState('Pay Fully');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        color="secondary"
        sx={{ mr: 2, fontSize: 12, color: colors.grey[250] }}
        size="medium"
      >
        Pay Bill
      </Button>
      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <DialogTitle>Pay Credit Card Bill</DialogTitle>
        <FormControl fullWidth>
          <InputLabel sx={{ margin: 2 }} id="payment-method-label">Payment Method</InputLabel>
          <Select
          sx={{ margin: 2 }}
            labelId="payment-method-label"
            id="payment-method-select"
            value={paymentMethod}
            label="Payment Method"
            onChange={handlePaymentMethodChange}
          >
            <MenuItem value="Pay Partially">Pay Partially</MenuItem>
            <MenuItem value="Pay Fully">Pay Fully</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth >
          <InputLabel sx={{ margin: 2 }} id="account-number-label">Account Number</InputLabel>
          <Select
          sx={{ margin: 2 }}
            labelId="account-number-label"
            id="account-number-select"
            value={selectedAccount}
            label="Account Number"
            onChange={handleAccountChange}
          >
            {accounts.map((account) => (
              account.status==='Active'?
              <MenuItem key={account.accountNumber} value={account.accountNumber}>
                {account.accountNumber}
              </MenuItem>
              :
              <></>
            ))}
          </Select>
        </FormControl>
        {paymentMethod === 'Pay Fully' ? (
          <TextField
            label="Amount to pay"
            value={creditCard.limit - creditCard.balance}
            InputProps={{
              readOnly: true
            }}
            multiline
            variant="filled"
            sx={{ margin: 2 }}
          />
        ) : (
          <TextField
            label="Amount to pay"
            value={partialAmount}
            onChange={handlePartialAmountChange}
            multiline
            variant="filled"
            sx={{ margin: 2 }}
          />
        )}
        <Button
          onClick={handlePayBill}
          color="secondary"
          variant="contained"
          style={{ margin: '10px', color: colors.grey[100] }}
        >
          Pay
        </Button>
      </Dialog>
    </div>
  );
}

PayCreditCardBillDialog.propTypes = {
  creditCard: PropTypes.object.isRequired
};

export default PayCreditCardBillDialog;
