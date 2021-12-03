import React, { Component } from 'react'
import { connect } from 'react-redux'
import { xoaGheAction } from '../../redux/action/BaiTapDatVeActions'
class ThongTinDatGhe extends Component {
    tongTien= 0;
    renderThongTinGhe = () => {
        this.tongTien=0;
        return this.props.danhSachGheDangDat.map((thongTinGhe, index) => {
            
            this.tongTien += thongTinGhe.gia;
            return <tr key={index}>
                <th className="text-warning" style={{ fontSize: 20 }}>{thongTinGhe.soGhe}</th>
                <th className="text-warning" style={{ fontSize: 20 }}>{thongTinGhe.gia}</th>
                <th className='text-center'>
                    <button onClick={() => {
                        this.props.xoaGhe(thongTinGhe.soGhe)
                    }} className="btn btn-danger">X</button>
                </th>
            </tr>
        })
    }
    render() {
        // console.log('danhSachGheDangDat', this.props.danhSachGheDangDat)
        
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon">
                    </button><span className="text-light" style={{ fontSize: '25px' }}>ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon">
                    </button><span className="text-light" style={{ fontSize: '25px' }}>ghế đang đặt</span>
                    <br />
                    <button className="ghe ml-0">
                    </button><span className="text-light " style={{ fontSize: '25px' }}>ghế chưa đặt</span>
                </div>
                <div className="mt-5">
                    <table className="table" border='2'>
                        <thead>
                            <tr className="text-light" style={{ fontSize: '20px' }}>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderThongTinGhe()}
                        </tbody>
                        <tfoot>
                        <tr className="text-light" style={{ fontSize: '20px' }}>
                            <td>Tổng Tiền</td>
                            <td  >{this.tongTien}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
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
        xoaGhe: (ghe) => {
            dispatch(xoaGheAction(ghe))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)