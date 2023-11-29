/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
        state = "ANECDOTE CREATED"
        return state 
    case "VOTE":
        state = "VOTE REGISTERED"
        return state 
    case "NULL":
        return "" 
    case "ERROR":
        state = "Could not add a new anecdote. LENGTH MUST BE > 5 CHARACTERS"
        return state
    default:
        return state
  }
}

const NotificationContext = createContext()

export const CounterContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, "")

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch] }>
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
  }
  
  export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
  }

export default NotificationContext