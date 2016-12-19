 import fetch from 'isomorphic-fetch'
let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}


function fetchStart(id){
  return {
    type:'REQUEST_POSTS',
    id:id
  }
}

function fetchEnd(subreddit,data){
  return {
    type :'RECEIVE_POSTS',
    id:data.error,
    text:data.message
  }
}
export function fetchData(id){
  return (dispatch)=>{
      dispatch(fetchStart(id));
      return fetch(`http://www.reddit.com/r/${id}.json`)
      .then(response => response.json())
      .then(json => dispatch(fetchEnd(id, json)))
  }
}
 