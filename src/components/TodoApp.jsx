import React from 'react'
import  TodoRows  from './ToDoRows';


import axios from 'axios'


class  TodoApp extends React.Component {
  constructor(){
    super()
		this.state = {
			todoItems: [],
			newTodo: '',
		};
	}

	componentDidMount() {
		axios
		  .get("http://localhost:3030/get-todoitems")
		  .then((res) => this.setState({ todoItems: res.data }));
	  }

	updateChange = (event) => {
		const {newTodo,value} =  event.target;
		this.setState({ [newTodo]: value });
	};

	addTodo = () => {
		axios.post("http://localhost:3030/add-todoitem", {
			itemName: this.state.newTodo,
//			todoDescription: this.state.description,
		  })
		  .then((response) => {
			console.log(response);
		  })
		  .catch((error) => {
			console.log(error);
		  });
	  };


render(){
	console.log(this.state.todoItems)
  return (
    <>
	<div className='container'>
			<div>
				<h1>Todo</h1>
				<div >
					<input
						name="newTodo"
						type="text"
						value={this.state.newTodo.value}
						onChange={this.updateChange}
					/>
					<button onClick={this.addTodo}>
						Add
					</button>
				</div>

				<div className='todos'>

				{this.state.todoItems.map((todo, index) => {
            		return (
              			<TodoRows
                		key={index}
                		todo={todo}
                		newTodo={this.state.newTodo}
              		/>
           	 	);
          			})}
          		{this.state.todoItems.length === 0 && (
            	<div className="center">Nothing</div>)}

				</div>

			</div>
		</div>
    </>
   
  );
}

}

export default TodoApp