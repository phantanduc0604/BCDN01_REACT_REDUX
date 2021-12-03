import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType";

const stateDefault = {
    danhSachGheDangDat:[

    ]
}

export const BaiTapDatVeReducer = (state = stateDefault,action) => {
    switch(action.type){
        case DAT_GHE: {
         
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){
                danhSachGheDangDatUpdate.splice(index,1);
            }else {
                danhSachGheDangDatUpdate.push (action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        case HUY_GHE:{
            // console.log('danhSachGheDangDat tren',state.danhSachGheDangDat);
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe);
            if(index !== -1){
                danhSachGheDangDatUpdate.splice(index,1);
            }
            // console.log('danhSachGheDangDat',state.danhSachGheDangDat);
            // console.log('action',action);
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        default: return {...state}
    }
}

