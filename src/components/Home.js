import React, { Component } from 'react'
import { Nav, Footer, Item, Map } from './presentation'
import { Search, Results } from './containers'

class Home extends Component {
	constructor(){
		super()
		this.state = {
			
		}
	}

	render(){
		return (
			<div className="wrapper">
				<div className="sidebar" data-background-color="white" data-active-color="danger">
					<Search />
				</div>

				<div className="main-panel">
					<Nav />

					<div className="content">
						<Results />
					</div>

					<Footer />
				</div>
			</div>
		)
	}
}

export default Home


