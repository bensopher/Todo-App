import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

export default function TodoList() {
	const [todoList, setTodoList] = useState([]);
	 
	
	useEffect (async() => {
		const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
		const todos = await response.json();
		setTodoList(todos);
	},
	[]
	)

	const deleteTodo = async (todoItem) => {
		await fetch(`https://nztodo.herokuapp.com/api/task/${todoItem.id}?format=json`, {
			method: 'DELETE'
		});
		//loadList();
	}
	
	return (
		<Paper className="p-4">
			<ul className="list-group">
				{
					todoList.map(function(singleTodo) {
						return (
							<li className="align-items-center list-group-item d-flex justify-content-between" key={singleTodo.id}>
								{
									singleTodo.title
								}
								<IconButton aria-label="delete" onClick={function() { deleteTodo(singleTodo) } } >
									<DeleteIcon fontSize="small" />
								</IconButton>
							</li>
						)	
					})
				}
			</ul>
		</Paper>		
	)	
}
