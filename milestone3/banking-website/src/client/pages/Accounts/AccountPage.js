import React from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Typography from "@mui/material/Typography";
import { tokens } from "../../../themes";
import { Box, Button, useTheme } from '@mui/material';
// import './Homepage.css';
import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import { Link, useParams } from 'react-router-dom';
import TransactionHistory from '../TransactionHistory';


function AccountPage() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { id } = useParams();
    console.log(id);
    const account = useSelector((state) => {
        return state.clients[0].accounts.find((account) => {
            return account.id === Number(id)
        })
    })
    const {
        accountNumber,
        accountType,
        creditScore,
        cards
    } = account;

    return (
        <div>
            <Box sx={{ margin: 3 }}>
                <div className='flex flex-row items-center, justify-between'>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        {accountType}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {accountNumber}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Credit Score: {creditScore}
                    </Typography>
                </div>

                {cards.length > 0 ?
                    cards.map((card) => {
                        return <CardItem key={card.id} card={card} />
                    })
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
                <TransactionHistory accountNumbers={[accountNumber]} />

            </Box>
        </div>
    )
}

export default AccountPage
