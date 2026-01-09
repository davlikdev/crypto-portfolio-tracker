import {Layout, Typography} from "antd";
import {useCrypto} from "../../context/cryptoContext.jsx";
import PortfolioChart from "../PortfolioChart.jsx";
import AssetsTable from "../AssetsTable.jsx";


const AppContent = () => {
    const {crypto, assets} = useCrypto();
    const contentStyle = {
        padding: "60px",
        minHeight: "calc(100vh - 64px)",
        backgroundColor: '#06245a',
    };
    const cryptoPriceMap = crypto.reduce((acc, cur) => {
        acc[cur.id] = cur.price
        return acc
    }, {})
    return (
        <Layout.Content style={contentStyle}>
            <Typography.Title style={{textAlign: "left", color: "white"}} level={3}>
                Portfolio: {" "}
                {assets
                    .map(asset => {
                        return asset.amount * cryptoPriceMap[asset.id];
                    })
                    .reduce((acc, total) => acc += total, 0)
                    .toFixed(2)
                }$
            </Typography.Title>
            <PortfolioChart assets={assets}/>
            <AssetsTable assets={assets}/>
        </Layout.Content>
    );
};
export default AppContent;