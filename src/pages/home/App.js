
import './App.css';
import React from 'react'
import { TodoRows } from '../../components/ToDoRows';
import { Navbar } from '../../components/Nevbar';


class  App extends React.Component {
  constructor(props){
    super(props)
		this.state = {
			userName: 'akhilesh',
			todoItems: [
				{ action: 'Buy things'},
				{ action: 'go to classroom'},
				{ action: 'Go to Gym' },
			],
			newTodo: '',
		};
	}

	updateValue = (event) => {
		this.setState({ newTodo: event.target.value });
	};

	newTodo = () => {
		this.setState({
			todoItems: [
				...this.state.todoItems,
				{ action: this.state.newTodo, done: false },
			],
		});
	}

  todoRows = () =>
		this.state.todoItems.map((item) => (
			<TodoRows key={item.action} item={item} callback={this.toggleDone} />
		));


  
render(){
  
  // const itemEvent= (event) =>{
  //    return this.setState({setInputList: event.target.value});
  // };
  
  return (
    <>
<div>
			<div>
				<Navbar name={this.state.userName} />
				<div>
					<input
						value={this.state.newToDo}
						onChange={this.updateValue}
					/>
					<button onClick={this.newTodo}>
						Add
					</button>
				</div>
				<div>
					<table>
							<tr>
								<th>Task</th>
							</tr>						
						<tbody>{this.todoRows()}</tbody>
					</table>
				</div>
			</div>
		</div>

    </>
   
  );
}

}

export default App;
