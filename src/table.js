import React, { Component } from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th colSpan="2"><h1>To-Do App</h1></th>
			</tr>
			<tr>
				<th className="taskColumn">Task</th>
				<th className="deleteColumn">Delete</th>
			</tr>
		</thead>
	)
}

const TableBody = (props) => {
	const rows = props.itemData.map((row, index) => {
		return (
			<tr key={index}>
				<td className="taskColumn">
					{index + 1 + ". "}{row.item}
				</td>
				<td className="deleteColumn">
					<button 
						aria-label="Delete"
						type="button"
						onClick={() => {
							props.removeItem(index)
							}
						}	
						>✖</button>
				</td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}

class Table extends Component {
	render() {
		const { itemData, removeItem } = this.props;
		return (
			<table>
				<TableHeader />
				<TableBody 
					itemData={itemData}
					removeItem={removeItem}
				/>
			</table>
		);
	}
}

export default Table