import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../../components/Header";
import AccountItem from './AccountItem';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { tokens } from '../../../themes';
import { useSpeechSynthesis } from 'react-speech-kit';

function Accounts() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => {
    return state.clients[0].accounts
  })
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { speak, cancel } = useSpeechSynthesis();

  const speakText = (text) => {
    speak({ text });
  };
  return (
    <div>
      <Header title='Accounts' subtitle='' />
      {accounts.map((account) => {
        return <AccountItem id={account.id} account={account} />
      })}
      <div className='flex flex-col items-center m-3'>
        <Link to='openAccount'>
          <Button variant='contained' color="secondary" sx={{ fontSize: 12, color: colors.grey[250] }} size="medium" onMouseLeave={() => cancel()} onMouseEnter={() => { speakText("Press here to apply for a new bank account") }}>Open an Account</Button>
        </Link>
      </div>
    </div>
  )
}

export default Accounts
