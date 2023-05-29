import React from 'react'
import { useSelector } from 'react-redux'
import NotificationItem from './NotificationItem';
import Header from '../../components/Header';


function Notifications() {
  const notifications = useSelector((state)=>{
    return state.clients[0].notifications.reminders;
  })
  return (
    <div>
      <Header title='Notifications'/>
      {notifications.map(update=>{
        return <NotificationItem notification={update}/>
      })}
    </div>
  )
}

export default Notifications
