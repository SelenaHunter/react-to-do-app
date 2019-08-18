/*
TO DO:
+ DONE Add task button works with enter key
+ DONE Autofocus input field after adding a task
+ DONE Don't allow empty tasks
+ DONE CSS formatting

+ Switch order of tasks w/ up/down buttons
+ Save to local storage button?
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './table';
import Form from './form';
import Announcements from './announcements';

class App extends Component {
	state = {
		items: [],
		announcementMessage: '',
	}

	componentDidMount() {  
		document.title = "To-Do App"
	}

	removeItem = (index) => {
		const { items } = this.state;
		this.setState({
			items: items.filter((item, i) => {
				return i !== index;
			}),
			announcementMessage:`${this.state.items[index].item} deleted`,
		})
	}
	
	handleSubmitTask = (item) => {
		this.setState({ 
			items: [...this.state.items, item],
			announcementMessage:`${item.item} added`,
		})
	}

	
	render() {
		const { items } = this.state;
		
		return (
			<div className="container">
				<Table itemData={items} removeItem={this.removeItem} />
				<Form handleSubmitTask={this.handleSubmitTask} />
				<Announcements message={this.state.announcementMessage}/>

			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
