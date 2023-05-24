import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from "../../components/Header";
import AccountItem from './AccountItem';


function Accounts() {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => {
    return state.clients[0].accounts
  })
  return (
    <div>
      <Header title='Accounts' subtitle=''/>
      {accounts.map((account)=>{
        return <AccountItem id={account.id} account={account}/>
      })}
    </div>
  )
}

export default Accounts
