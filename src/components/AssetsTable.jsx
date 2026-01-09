import React from 'react';
import {Table} from 'antd';

const AssetsTable = ({assets}) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Price $',
            dataIndex: 'price',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: (a, b) => a.amount - b.amount,
        },
    ];
    return (
        <div>
            <Table
                pagination={false}
                columns={columns}
                dataSource={assets.map(asset => ({
                    key: asset.id,
                    name: asset.name,
                    price: asset.price,
                    amount: asset.amount,
                }))}
            />
        </div>
    );
};

export default AssetsTable;