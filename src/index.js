/*
TO DO:
+ DONE Add task button works with enter key
+ DONE Autofocus input field after adding a task
+ DONE Don't allow empty tasks

+ Switch order of tasks
+ CSS formatting
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table';
import Form from './form';

class App extends Component {
	state = {
		items: []
	}

	removeItem = (index) => {
		const { items } = this.state;
		
		this.setState({
			items: items.filter((item, i) => {
				return i !== index;
			}),
		})
	}
	
	handleSubmitTask = (item) => {
		this.setState({ items: [...this.state.items, item] })
	}

	
	render() {
		const { items } = this.state;
		
		return (
			<div className="container">
				<Table itemData={items} removeItem={this.removeItem} />
				<Form handleSubmitTask={this.handleSubmitTask} />
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
