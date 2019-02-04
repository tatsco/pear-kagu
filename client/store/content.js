import axios from 'axios'

//action types
const SET_CONTENT = 'SET_CONTENT'
const CLEAR_CONTENT = 'CLEAR_CONTENT'

//action creators

const setContent = content => {
  return {
    type: SET_CONTENT,
    content
  }
}

export const clearContent = () => {
  return {
    type: CLEAR_CONTENT
  }
}

//thunk creators
export const fetchContent = interestName => {
  return async dispatch => {
    let interestResponse = await axios.get(`/api/interests/${interestName}`)
    const {id} = interestResponse.data
    let contentResponse = await axios.get(`/api/content/${id}`)
    const contentData = contentResponse.data
    const read = contentData.filter(content => content.typeId === 1)
    const watch = contentData.filter(content => content.typeId === 2)
    const meet = contentData.filter(content => content.typeId === 3)
    const content = {
      read,
      watch,
      meet
    }
    dispatch(setContent(content))
  }
}

//initial state
const initialState = {
  read: [],
  watch: [],
  meet: []
}

//reducer

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      return action.content
    case CLEAR_CONTENT:
      return initialState
    default:
      return state
  }
}
