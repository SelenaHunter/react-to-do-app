import React, { Component } from 'react'

class Form extends Component {
	
	constructor(props) {
		super(props)
		
		this.initialState = {
			item: '',
		}
		this.state = this.initialState;
	}
	
	handleChange = (event) => {
		const { name, value } = event.target;
			this.setState({
			[name]: value,
		})
 	}
	
	submitTask = () => {
		//if task is not empty (null)
		if (this.state.item) {
			this.props.handleSubmitTask(this.state);
			this.setState(this.initialState);
		}
	}
	
	render() {
		const { item } = this.state;
		return (
			<form>
				<label>Add new task:</label>
				<input 
					type="text" 
					name="item" 
					value={item}
					autoFocus
					onChange={this.handleChange}
					//If you hit enter, submit the task, don't refresh the form
					onKeyPress={(event) => { 
							if (event.key === 'Enter') {
								event.preventDefault();
								this.submitTask();
							}
						}
					}
					/>
				<button 
					type="button" 
					onClick={this.submitTask}
					>Add Task</button>
			</form>
		);
	}
}

export default Form