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
	
	submitForm = () => {
		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
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
					onChange={this.handleChange} />
				<input className="button" type="button" value="Add" onClick={this.submitForm} />
			</form>
		);
	}
}

export default Form