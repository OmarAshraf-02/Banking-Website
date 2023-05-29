import React from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Typography from "@mui/material/Typography";
import { tokens } from "../../../themes";
import { Box, Button, TextField, useTheme } from '@mui/material';
// import './Homepage.css';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from './CardItem';
import { Link, useParams } from 'react-router-dom';
import TransactionHistory from '../TransactionHistory';
import BackButton from '../../../shared/components/BackButton';
import CloseAccountDialog from '../../components/CloseAccountDialog';


function AccountPage() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { id } = useParams();
    const account = useSelector((state) => {
        return state.clients[0].accounts.find((account) => {
            return account.id === Number(id)
        })
    })
    const {
        accountNumber,
        accountType,
        creditScore,
        card,
        balance,
        status
    } = account;

    return (
        <div>
            <Box sx={{ margin: 3 }}>
                <BackButton to="/accounts" />
                <div className='flex flex-row items-center justify-between'>
                <TextField
  label="Account Type"
  value={accountType}
  InputProps={{
    readOnly: true,
  }}
  multiline
  variant="filled"
  fullWidth
  sx={{ mb: 2 , mr:2 }}
/>

<TextField
  label="Account Number"
  value={accountNumber}
  InputProps={{
    readOnly: true,
  }}
  multiline
  fullWidth
  variant="filled"
  sx={{ mb: 2, mr:2 }}
/>

<TextField
  label="Balance"
  fullWidth
  value={balance}
  InputProps={{
    readOnly: true,
  }}
  multiline
  variant="filled"
  sx={{ mb: 2 , ml:2 }}
/>
                    {/* <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        {accountType}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {accountNumber}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Balance: {balance}
                    </Typography> */}
                </div>
                {card!==undefined&&Object.keys(card).length > 0 ?
                    <CardItem key={card.id} card={card} />
                    :
                    <div className='flex flex-row items-center m-4'>
                        <Link to='debitCardForm'>
                            <Box display="flex" justifyContent="end" mt="20px" margin={3} padding={3}>
                                <Button type="submit" color="secondary" variant="contained">
                                    Apply for debit card
                                </Button>
                            </Box>
                        </Link>
                        <Link to='prepaidCardForm'>
                            <Box display="flex" justifyContent="end" mt="20px" margin={3} padding={3}>
                                <Button type="submit" color="secondary" variant="contained">
                                    Apply for prepaid card
                                </Button>
                            </Box>
                        </Link>
                    </div>
                }
                <TransactionHistory accountNumbers={[accountNumber]} isTitle={false} />
                {status==='Inactive'?<></>:<CloseAccountDialog account={account}/>}
                
            </Box>
        </div>
    )
}

export default AccountPage
