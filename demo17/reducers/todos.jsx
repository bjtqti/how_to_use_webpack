const todo = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      console.log('RECEIVE_POSTS')
      return Object.assign({}, state,{
          isAdding:false,
          isAdded:true,
          id:action.id,
          text:'xxx',
          completed:false
      });
    case 'REQUEST_POSTS':
      return Object.assign({}, state,{
          isAdding:false,
          isAdded:true,
          id:329,
          text:'bbc',
          completed:false
      });
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'REQUEST_POSTS':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos