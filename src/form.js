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
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	}
	
	keyPressed = (event) => {
	  event.preventDefault();
	  if (event.key === "Enter") {
		this.submitTask();
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
					onKeyPress={this.keyPressed}
					onChange={this.handleChange} />
				<button 
					type="button" 
					onClick={this.submitTask}>Add Task</button>
			</form>
		);
	}
}

export default Form