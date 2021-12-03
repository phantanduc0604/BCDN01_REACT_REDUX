import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType"

export const datGheAction = (ghe) => {
   return {
    type: DAT_GHE,
    ghe
   }
}

export const xoaGheAction = (ghe) => {
    return {
        type: HUY_GHE,
        ghe
    }
}