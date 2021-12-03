import React, { Component } from 'react'
import './BTOanTuXi.css'
import Computer from './Computer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './Player'
import KetQuaTroChoi from './KetQuaTroChoi';

import { connect } from 'react-redux';
 class BTOanTuXi extends Component {
    render() {
        return (
            <div className="game">
                <div className="row text-center mt-5">
                    <div className="col-3">
                        <Player />
                    </div>
                    <div className="col-6">
                        <KetQuaTroChoi />
                        <button className="btn btn-success mt-3 display-4" onClick={() => {
                            const action = {
                                type: "PLAY_GAME"
                            }
                            this.props.dispatch(action);
                        }}>Play</button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}


export default connect()(BTOanTuXi)