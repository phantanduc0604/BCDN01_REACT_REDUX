/* eslint-disable no-fallthrough */
const stateDefault = {
    banChon: "bua",
    soBanThang: 0,
    soBanChoi: 0,
    mayChon: "keo",
    KQTroChoi: <tr></tr>
}

export const BTGameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "BAN_CHON": {
            state.banChon = action.banChon
            return { ...state }
        }
        case "PLAY_GAME": {
            state.soBanChoi++;

            let soNN = Math.floor(Math.random() * 3 + 1);
            // console.log(soNN);
            switch (soNN) {
                case (1): {
                    state.mayChon = "keo"
                    // console.log("may chon keo");
                    break;
                }
                case (2): {
                    state.mayChon = 'bua'
                    // console.log("may chon bua");
                    break;
                }
                case (3): {
                    state.mayChon = "bao"
                    // console.log("may chon bao");
                    break;
                }
                default: {
                    console.log("error")
                }
            }

            if (state.banChon === state.mayChon) 
            { state.KQTroChoi = true;
              state.soBanThang++
             }
            else { state.KQTroChoi = false }


            return { ...state }
        }
        default: { return { ...state } }
    }
}