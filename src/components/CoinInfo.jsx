import React from 'react';
import {Flex, Typography} from "antd";

const CoinInfo = ({coin, withSymbol}) => {
    return (
        <Flex align={'center'}>
            <img style={{width: 50, marginRight: 10}} src={coin.icon} alt={coin.name}/>
            <Typography.Title style={{margin: 0}} level={2}>
                {withSymbol && <span>({coin.symbol})</span>} {coin.name}
            </Typography.Title>
        </Flex>
    );
};

export default CoinInfo;