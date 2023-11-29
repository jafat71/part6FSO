
import { useNotificationValue } from '../NotificationContext'

const Notification = () => {
  const visibleStyle = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const hiddenStyle = {
    display: 'none'
  }
  
  const message = useNotificationValue()

  return (
    <div style={message!=="" ? visibleStyle : hiddenStyle }>
        {message}   
    </div>
  )
}

export default Notification
