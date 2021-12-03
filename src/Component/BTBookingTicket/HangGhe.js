import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../../redux/action/BaiTapDatVeActions';
class HangGhe extends Component {

    renderGhe = () => {
        // console.log(this.props);
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if(indexGheDangDat !== -1){
                cssGheDangDat = 'gheDangChon'
            }
            return <button onClick={() => {
                this.props.datGhe(ghe);
                // console.log('ghe', ghe);
                
            }} disabled={disabled} className={`ghe ${cssGheDaDat}  ${cssGheDangDat}`} key={index}>
                {index}
            </button>
        })
    }

    renderSoHang = () => {
        return <span className="rowNumber">{this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber'>
                {hang.soGhe}
            </button>
        })}</span>
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light text-left ml-5 mt-2' style={{ fontSize: '20px' }}>

                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
   
    return {
        
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)