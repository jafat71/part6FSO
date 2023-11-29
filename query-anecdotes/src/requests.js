
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

export const getAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export const createAnecdote = async (newAnecdote) => {
    newAnecdote.votes = 0
    newAnecdote.id = getId()
    const response = await axios.post(baseUrl,newAnecdote)
    return response.data
}

export const setVote = async (anecdote) => {
    const updateResponse = await axios.put(baseUrl+'/' + anecdote.id,anecdote)
    return updateResponse.data
} 