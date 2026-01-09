import {useContext} from 'react';
import {Card, Layout, List, Statistic, Typography, Spin, Tag} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import {capitalize} from "../../util/util.js";
import {CryptoContext} from "../../context/cryptoContext.jsx";

const AppSider = () => {
    const siderStyle = {
        color: '#fff',
        backgroundColor: '#06245a',
        padding: '1rem',
    };
    const {assets} = useContext(CryptoContext);

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => (
                <Card key={asset.id} style={{marginBottom: "1rem"}} variant="borderless">
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        styles={{content: {color: asset.grow ? '#3f8600' : '#cf1322'}}}
                        prefix={asset.grow ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}
                        suffix="$"
                    />
                    <List
                        dataSource={[
                            {title: "Total Profit", value: asset.totalProfit, withTag: true},
                            {title: "Asset Amount", value: asset.amount, isPlain: true},
                            /*{title: "Difference", value: asset.growPercent},*/
                        ]}
                        renderItem={item => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>
                                    {item.withTag && <Tag color={asset.grow ? "green" : "red"}>{asset.growPercent}%</Tag>}
                                    {item.isPlain && <span>{item.value}</span>}
                                    {!item.isPlain &&
                                        <Typography.Text type={asset.grow ? "success" : "danger"}>
                                            {item.value.toFixed(2)}$
                                        </Typography.Text>
                                    }
                                </span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}

        </Layout.Sider>
    );
};
export default AppSider;