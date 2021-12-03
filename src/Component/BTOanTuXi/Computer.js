import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Computer extends Component {
    render() {
        // console.log(this.props)
        let {mayChon} = this.props.BTGameReducer
        return (
            <div className="playGame">
                <div className="theThink">
                    <img width={90} height={90} src={`./img/${mayChon}.png`} alt={`./img/${mayChon}.png`} />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 170, height: 170 }} src="./img/playerComputer.png" alt="./img/playerComputer.png" />
                
            </div>
        )
    }
}

const mapStateToProps = (roorReducer) => {
    return {
        BTGameReducer: roorReducer.BTGameReducer
    }
}

export default connect(mapStateToProps)(Computer)