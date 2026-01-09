import {useEffect, useState} from 'react';
import {Button, Drawer, Layout, Modal, Select, Space} from "antd";
import {useCrypto} from "../../context/cryptoContext.jsx";
import CryptoInfoModal from "../CryptoInfoModal.jsx";
import AddAssetsForm from "../AddAssetsForm.jsx";

const headerStyle = {
    color: '#fff',
    height: 64,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: "1rem"
};

const AppHeader = () => {
    const [select, setSelect] = useState(false)
    const [modal, setModal] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [coin, setCoin] = useState('');
    const {crypto} = useCrypto();
    useEffect(() => {
        const keypress = (e) => {
            if (e.key === '/') {
                setSelect((prev => !prev));
            }
        }
        document.addEventListener("keypress", keypress);
        return () => {
            document.removeEventListener("keypress", keypress);
        };
    }, [])

    function handleSelect(value) {
        setSelect((prev) => !prev);
        setCoin(crypto.find(c=> c.id === value));
        setModal(true);
    }

    return (
        <Layout.Header style={headerStyle}>
            <Select optionRender={(option) => (
                <Space>
                    <img style={{width: 20}} src={option.data.icon} alt={option.label}/>
                    <span>{option.label}</span>
                </Space>
            )}
                    onSelect={handleSelect}
                    defaultValue="press / to open" style={{width: 300}}
                    onClick={() => setSelect((prev) => !prev)}
                    options={crypto.map((coin) => ({label: coin.name, value: coin.id, icon: coin.icon}))}
                    open={select}
            />
            <Modal
                footer={null}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={modal}
                onCancel={() => setModal(false)}
            >
                <CryptoInfoModal coin={coin} />
            </Modal>
            <Button onClick={()=> {setDrawer(true)}} type="primary">Add Asset</Button>
            <Drawer
                title={"Add Asset"}
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => setDrawer(false)}
                open={drawer}
                size={600}
                destroyOnClose
            >
                <AddAssetsForm drawer={drawer} onClose={() => setDrawer(false)} />
            </Drawer>
        </Layout.Header>
    );
};

export default AppHeader;