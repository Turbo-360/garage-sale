import React, { Component } from 'react'
import { Item } from '../presentation'
import { connect } from 'react-redux'
import actions from '../../actions'

class Results extends Component {
	constructor(){
		super()
		this.state = {
			item: {
				position: {lat:40.70224017, lng:-73.9796719}
			}
		}
	}

	updateItem(attr, event){
		event.preventDefault()
		console.log(attr + ' == ' + event.target.value)

		// this.state.item[attr] = event.target.value // NO

		let updated = Object.assign({}, this.state.item)
		updated[attr] = event.target.value
		this.setState({
			item: updated
		})
	}

	addItem(){
		console.log('ADD ITEM: ' + JSON.stringify(this.state.item))

		let newItem = Object.assign({}, this.state.item)
//		{id:1, key:'1', price:10, defaultAnimation:2, label:'Nike Jordans', position:{lat:40.7224017, lng:-73.9896719}},

		newItem['id'] = 100
		newItem['key'] = '100'
		newItem['defaultAnimation'] = 2

		/// we have to call the addItem action
		this.props.addItem(newItem)
	}

	render() {
		const items = this.props.item.all || []
		return (
			<div className="container-fluid">
				<div className="row">
					{ items.map((item, i) => {
							return <Item key={item.id} item={item} />
						})
					}
				</div>


				<div className="row">
					<div className="col-md-4">

			            <div className="card">
			                <div className="content">
			                    <div className="footer">
			                    	<h3>Add Item</h3>
			                    	<input onChange={this.updateItem.bind(this, 'label')} type="text" style={localStyle.input} className="form-control" placeholder="Name" />

			                    	<input onChange={this.updateItem.bind(this, 'price')} type="text" style={localStyle.input} className="form-control" placeholder="Price" />
			                        <hr />
			                        <div className="stats">
			                        	<button onClick={this.addItem.bind(this)} className="btn btn-success">Add Item</button>
			                        </div>
			                    </div>
			                </div>
			            </div>


					</div>
				</div>

			</div>
		)
	}
}

const localStyle = {
	input: {
		border: '1px solid #ddd',
		marginBottom: 12
	}
}

const stateToProps = (state) => {
	return {
		item: state.item
	}
}

const dispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(actions.addItem(item))
	}
}

export default connect(stateToProps, dispatchToProps)(Results)




