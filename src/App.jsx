import React from 'react';
import CryptoContextProvider from "./context/cryptoContext.jsx";
import AppLayout from "./components/layout/AppLayout.jsx";

const App = () => (
    <CryptoContextProvider>
        <AppLayout/>
    </CryptoContextProvider>

);
export default App;