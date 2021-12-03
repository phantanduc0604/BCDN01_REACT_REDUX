import React, { Component } from 'react'

import { connect } from 'react-redux'
class Player extends Component {
    render() {
        // console.log(this.props.BTGameReducer)
        let { banChon } = this.props.BTGameReducer
        return (
            <div className="playGame">
                <div className="theThink">
                    <img width={90} height={90} src={`./img/${banChon}.png`} alt={`./img/${banChon}.png`} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 170, height: 170 }} src="./img/player.png" alt="./img/player.png" />
                <div className="row">
                    <div className="col-4">
                        <button className="btnItem" onClick={(state) => {
                            const action= {
                                type: "BAN_CHON",
                                banChon: "bao"
                            }
                            this.props.dispatch(action)
                        }}>
                            <img width={40} height={40} src="./img/bao.png" alt="" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem" onClick={(state) => {
                            const action= {
                                type: "BAN_CHON",
                                banChon: "keo"
                            }
                            this.props.dispatch(action)
                        }}>
                            <img width={40} height={40} src="./img/keo.png" alt="" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem" onClick={(state) => {
                            const action= {
                                type: "BAN_CHON",
                                banChon: "bua"
                            }
                            this.props.dispatch(action)
                        }}>
                            <img width={40} height={40} src="./img/bua.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        BTGameReducer: rootReducer.BTGameReducer
    }
}

export default connect(mapStateToProps)(Player)