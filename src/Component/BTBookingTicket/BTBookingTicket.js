import React, { Component } from 'react'
import './BTBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../../Data/danhSachGhe.json'
import HangGhe from './HangGhe'


export default class BTBookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe,index) => {
            return <div key={{index}} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        }) 
    }
    render() {
        return (
            <div className="BookingTicket" style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')", backgroundSize: '100%' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'fixed', width: '100%', height: '100%' }}></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center">
                            <div className="text-warning display-4">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                            <div className="mt-3 text-light" style={{ fontSize: '25px' }}>Màn Hình</div>
                            <div className="mt-2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                                <div className="screen"></div>
                                
                            </div>
                            {this.renderHangGhe()}
                        </div >
                        <div className="col-4 ">
                            <div className="text-light mt-2" style={{ fontSize: '30px' }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                            <ThongTinDatGhe />
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
