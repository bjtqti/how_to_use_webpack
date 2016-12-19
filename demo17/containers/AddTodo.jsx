import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addTodo ,fetchData} from '../actions'

class AddTodo extends Component{ 

  render(){
    let input
      return (
        <div>
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.dispatch(fetchData(input.value))
            input.value = ''
          }}>
            <input ref={node => {
              input = node
            }} />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
      )
  }

}
// let AddTodo = ({ dispatch }) => {
//   let input

//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(fetchData(input.value))
//         input.value = ''
//       }}>
//         <input ref={node => {
//           input = node
//         }} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }

AddTodo = connect()(AddTodo)

export default AddTodo