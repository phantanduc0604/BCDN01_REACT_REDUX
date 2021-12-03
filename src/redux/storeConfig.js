import { combineReducers, createStore } from "redux";
import { BTGameReducer } from "./reducer/BTGameReducer";
import { BaiTapDatVeReducer} from "./reducer/BaiTapDatVeReducer"

const rootReducer = combineReducers({
    BTGameReducer,
    BaiTapDatVeReducer
})

export const store = createStore(rootReducer);