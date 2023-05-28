import React from 'react'
import { useSelector } from 'react-redux'
import NotificationItem from './NotificationItem';
import Header from '../../components/Header';

function Notifications() {
  const {
    bankAnnouncements,
    issueResolution,
    loanApplication,
    creditCardApplication,
    debitCardApplication,
    prepaidCardApplication,
    updates
  } = useSelector((state)=>{
    return state.clients[0].notifications;
  })
  return (
    <div>
      <Header title='Notifications'/>
      {bankAnnouncements.map(bankAnnouncement=>{
        return <NotificationItem notification={bankAnnouncement}/>
      })}
      {issueResolution.map(issue=>{
        return <NotificationItem notification={issue}/>
      })}
      {loanApplication.map(loan=>{
        return <NotificationItem notification={loan}/>
      })}
      {creditCardApplication.map(creditCard=>{
        return <NotificationItem notification={creditCard}/>
      })}
      {debitCardApplication.map(debitCard=>{
        return <NotificationItem notification={debitCard}/>
      })}
      {prepaidCardApplication.map(prepaidCard=>{
        return <NotificationItem notification={prepaidCard}/>
      })}
      {updates.map(update=>{
        return <NotificationItem notification={update}/>
      })}
    </div>
  )
}

export default Notifications
