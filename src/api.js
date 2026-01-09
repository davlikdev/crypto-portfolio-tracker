import {cryptoData, cryptoAssets} from "./data.js"

export const fakeFetchCrypto = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 100)
    })
}

export const fakeFetchAssets = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 100)
    })
}