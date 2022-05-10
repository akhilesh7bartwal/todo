import React from 'react';
//import axios from 'axios';


const TodoRows = ({ todo, newTodo}) => {
	const { itemName } = todo;
	// const deleteTodo = () => {
	//   axios
	// 	.delete(`http://localhost:3000/delete-todo/${id}`)
	// 	.then((response) => console.log(response));
	// };
	// const modify = () => {
	//   axios
	// 	.put(`http://localhost:3000/modify-todo/${id}`, {
	// 	  todoName: newTodo,
	// 	})
	// 	.then((response) => console.log(response));
	// };
	return (
	  <React.Fragment>
		<div className="todo flex align-items-center gap-small">
		  <div>
			<span>
			  <strong>{itemName}</strong>
			</span>

		  </div>
		  {/* <button onClick={modify}>Modify</button>
		  <button className="delete" onClick={deleteTodo}>
			Delete
		  </button> */}
		</div>
	  </React.Fragment>
	);
  };
  
  export default TodoRows;


// export class TodoRows extends React.Component {
// 	render = () => (
// 		<tr>
// 			<td>{this.props.todoItems}</td>
// 			<td>
// 				<input
// 					type="checkbox"
// 					onChange={this.props.todoItems.value}
// 				/>
// 			</td>
// 		</tr>
// 	);
// }