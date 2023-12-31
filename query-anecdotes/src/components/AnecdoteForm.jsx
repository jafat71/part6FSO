import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'


const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  const dispatch = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: ()=>{
      // const anecdotes = queryClient.getQueryData(['anecdotes'])
      // queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      queryClient.invalidateQueries({queryKey: ['anecdotes']})
    },
    onError:()=>{
      dispatch({type:'ERROR'})
      setTimeout(()=>{
        dispatch({type:"NULL"})
      },5000)
    },

  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content})
    dispatch({ type:"CREATE" })
    setTimeout(() => {
      dispatch({ type: "NULL" });
    }, 5000);
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
