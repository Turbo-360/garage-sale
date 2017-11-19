import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {

	render(){
		const currentUser = this.props.account.currentUser // can be null

		return (
	        <nav className="navbar navbar-default">
	            <div className="container-fluid">
	                <div className="navbar-header">
	                    <button type="button" className="navbar-toggle">
	                        <span className="sr-only">Toggle navigation</span>
	                        <span className="icon-bar bar1"></span>
	                        <span className="icon-bar bar2"></span>
	                        <span className="icon-bar bar3"></span>
	                    </button>
	                    <a className="navbar-brand" href="#">Dashboard</a>
	                </div>
	                <div className="collapse navbar-collapse">
	                    <ul className="nav navbar-nav navbar-right">
	                        <li>
	                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
	                                <i className="ti-panel"></i>
									<p>Stats</p>
	                            </a>
	                        </li>
	                        <li className="dropdown">
	                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
	                                    <i className="ti-bell"></i>
	                                    <p className="notification">5</p>
										<p>Notifications</p>
										<b className="caret"></b>
	                              </a>
	                              <ul className="dropdown-menu">
	                                <li><a href="#">Notification 1</a></li>
	                                <li><a href="#">Notification 2</a></li>
	                                <li><a href="#">Notification 3</a></li>
	                                <li><a href="#">Notification 4</a></li>
	                                <li><a href="#">Another notification</a></li>
	                              </ul>
	                        </li>
							<li>
	                            <a href="#">
	                            	{ (currentUser == null) ? null : <p>Welcome {currentUser.username}</p> }
	                            </a>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </nav>
		)
	}
}

const stateToProps = (state) => {
	return {
		account: state.account
	}
}

export default connect(stateToProps)(Nav)


