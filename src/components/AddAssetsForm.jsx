import {useState, useRef} from 'react';
import {Button, DatePicker, Divider, Flex, Form, InputNumber, Result, Select, Space, Typography} from "antd";
import {useCrypto} from "../context/cryptoContext.jsx";
import CoinInfo from "./CoinInfo.jsx";

const AddAssetsForm = ({onClose}) => {
    const {crypto, addAsset} = useCrypto()
    const assetRef = useRef(null);
    const [coin, setCoin] = useState(null);
    const [form] = Form.useForm()
    const [submitted, setSubmitted] = useState(false);
    function handleAmountChange(value) {
        const price = form.getFieldValue("price")
        form.setFieldsValue(
            {
            total: +(value * price).toFixed(2),
        })
    }
    function handlePriceChange(value) {
        const amount = form.getFieldValue("amount")
        form.setFieldsValue(
            {
                total: +(value * amount).toFixed(2),
            })
    }
    function handleClose() {
        onClose()
        setSubmitted(false);
        setCoin(null)
    }
    const onFinish = (values) => {
        setSubmitted(true);
        const newAsset = {
            id: coin.id,
            amount: values.amount,
            price: values.price,
            date: values.date?.$d ?? Date.now(),
        }
        assetRef.current = newAsset
        addAsset(newAsset)
    }

    if (submitted) {
        return <Result
            status="success"
            title="New Asset added successfully"
            subTitle={`Added ${assetRef.current.amount} ${coin.name} by price ${assetRef.current.price}$`}
            extra={[
                <Button onClick={handleClose} type="primary" key="console">
                    Close
                </Button>,
            ]}
        />
    }
    if (!coin) {
        return (
            <Select
                optionRender={(option) => (
                    <Space>
                        <img style={{width: 20}} src={option.data.icon} alt={option.label}/>
                        <span>{option.label}</span>
                    </Space>)}
                placeholder="choose a coin" style={{width: "100%"}}
                options={crypto.map((coin) => ({label: coin.name, value: coin.id, icon: coin.icon}))}
                onSelect={(v) => setCoin(crypto.find(coin => coin.id === v))}
            />)
    }

    const validateMessages = {
        required: "${label} is required!",
        types: {
            number: "${label} is not a valid number",
        },
        number: {
            min: "${label} must be more than ${min}",
        }
    };

    return (
        <>
            <CoinInfo coin={coin} withSymbol/>
            <Divider/>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{price: +coin.price.toFixed(2)}}
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    label="Amount"
                    name="amount"

                    rules={[{
                        required: true,
                        min: 0,
                        type: "number",
                    }]}
                >
                    <InputNumber onChange={handleAmountChange} placeholder="Enter coin amount" style={{width: "100%"}}/>
                </Form.Item>

                <Form.Item label="Price" name="price">
                    <InputNumber onChange={handlePriceChange} style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item label="Date" name="date">
                    <DatePicker showTime/>
                </Form.Item>
                <Form.Item
                    label="Total"
                    name="total"
                >
                    <InputNumber disabled style={{width: "100%"}}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Add Asset
                    </Button>
                </Form.Item>
            </Form>

        </>
    );
};

export default AddAssetsForm;