import {createContext, useContext, useEffect, useState} from 'react';
import {fakeFetchAssets, fakeFetchCrypto} from "../api.js";
import {percentDifference} from "../util/util.js";

export const CryptoContext = createContext({
    loading: false,
    crypto: [],
    assets: [],
})

const CryptoContextProvider = ({children}) => {
    const [crypto, setCrypto] = useState([])
    const [assets, setAssets] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function preload () {
            setLoading(true)
            const {result} = await fakeFetchCrypto()
            const assets = await fakeFetchAssets()
            setAssets(mapAssets(assets, result))
            setCrypto(result)
            setLoading(false)
        }
        preload()
    }, []);

    function mapAssets(assets,  result) {
        return assets.map(asset => {
            const coin = result.find(c=> c.id === asset.id)
            return {
                grow: asset.price < coin.price,
                growPercent: percentDifference(asset.price, coin.price),
                totalAmount: asset.amount * coin.price,
                totalProfit: asset.amount * coin.price - asset.amount * asset.price,
                name: coin.name,
                ...asset
            }
        })
    }

    function addAsset(newAsset) {
        setAssets(prev => mapAssets([...prev, newAsset], crypto))
    }
    return (
       <CryptoContext.Provider value={{loading, crypto, assets, addAsset}}>
           {children}
       </CryptoContext.Provider>
    );
};

export default CryptoContextProvider;

export const useCrypto = () => {
    return useContext(CryptoContext);
}