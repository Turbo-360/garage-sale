import React, { Component } from 'react'
import { Item } from '../presentation'
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'
import actions from '../../actions'
import turbo from 'turbo360'

class Results extends Component {
	constructor(){
		super()
		this.state = {
			item: {
				// position: {lat:40.70224017, lng:-73.9796719}
			}
		}
	}

	componentDidMount(){
		this.props.fetchItems()
	}

	updateItem(attr, event){
		event.preventDefault()
		// console.log(attr + ' == ' + event.target.value)

		// this.state.item[attr] = event.target.value // NO

		let updated = Object.assign({}, this.state.item)
		updated[attr] = event.target.value
		this.setState({
			item: updated
		})
	}

	addItem(){
		if (this.props.account.currentUser == null){
			alert('Please log in or register to sell items')
			return
		}

		const currentUser = this.props.account.currentUser
		let updated = Object.assign({}, this.state.item)
		updated['position'] = this.props.map.currentLocation
		updated['seller'] = {
			id: currentUser.id,
			username: currentUser.username,
			image: currentUser.image || ''
		}

		// console.log('ADD ITEM: ' + JSON.stringify(updated))
		this.props.addItem(updated)
		.then(data => {
			console.log('ITEM ADDED:' + JSON.stringify(data))
		})
		.catch(err => {
			console.log('ERROR: ' + err.message)
		})
	}

	uploadImage(files){
		const image = files[0]
		console.log('uploadImage: ' + image.name)
		const turboClient = turbo({site_id:'5a104f39eaac0e0014b0f81c'})

		turboClient.uploadFile(image)
		.then(data => {
			// console.log('FILE UPLOADED: ' + data.result.url)

			let updated = Object.assign({}, this.state.item)
			updated['image'] = data.result.url
			this.setState({
				item: updated
			})
		})
		.catch(err => {
			console.log('Upload ERROR: ' + err.message)
		})
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
			                    	<input onChange={this.updateItem.bind(this, 'name')} type="text" style={localStyle.input} className="form-control" placeholder="Name" />

			                    	<input onChange={this.updateItem.bind(this, 'price')} type="text" style={localStyle.input} className="form-control" placeholder="Price" />
			                    	{ (this.state.item.image == null) ? null : <img style={{width:100+'%'}} src={this.state.item.image+'=s240-c'} /> }

			                        <hr />
			                        <div className="stats">
			                        	<Dropzone onDrop={this.uploadImage.bind(this)} className="btn btn-info btn-fill" style={{marginRight:16}}>Add Image</Dropzone>
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
		item: state.item,
		map: state.map,
		account: state.account
	}
}

const dispatchToProps = (dispatch) => {
	return {
		addItem: (item) => dispatch(actions.addItem(item)),
		fetchItems: (params) => dispatch(actions.fetchItems(params))
	}
}

export default connect(stateToProps, dispatchToProps)(Results)




