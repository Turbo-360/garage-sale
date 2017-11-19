import React, { Component } from 'react'

export default (props) => {
    // {id:1, key:'1', defaultAnimation:2, label:'Nike Jordans', 
    // position:{lat:40.7224017, lng:-73.9896719}},

    const item = props.item

	return (
        <div className="col-lg-3 col-sm-6">
            <div className="card">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big icon-warning text-center">
                                <i className="ti-server"></i>
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>{item.label}</p>
                                ${item.price}
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <hr />
                        <div className="stats">
                            <i className="ti-reload"></i> Updated now
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)


}