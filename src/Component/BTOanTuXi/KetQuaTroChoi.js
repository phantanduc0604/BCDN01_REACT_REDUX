import React, { Component } from 'react'
import { connect } from 'react-redux'

 class KetQuaTroChoi extends Component {
    render() {
        // console.log(this.props.BTGameReducer)
        let {soBanThang,soBanChoi,KQTroChoi} = this.props.BTGameReducer
        return (
            <div>
                <div className="display-4 text-warning">{KQTroChoi ? "Bạn Thắng " : "Bạn Thua"}</div>
                <div className="display-4 text-success">Số bàn thắng:<span className="text-warning">{soBanThang}</span></div>
                <div className="display-4 text-success">Tổng số bàn chơi:<span className="text-warning">{soBanChoi}</span></div>
                
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        BTGameReducer:rootReducer.BTGameReducer
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi)