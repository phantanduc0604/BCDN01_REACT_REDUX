import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="container text-center text-body">
                <button className="btn btn-success mr-5">
                    <NavLink to="/BTOanTuXi">BTOanTuXi</NavLink>
                </button>
                <button className="btn btn-warning">
                    <NavLink to="/BTBookingTicket">
                        BTBookingTicket
                    </NavLink>
                </button>
            </div>
        )
    }
}
