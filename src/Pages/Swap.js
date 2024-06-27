import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const tokens = [
    { name: 'Bitcoin', symbol: 'BTC', icon: '/Asserts/ICON/btc.png' },
    { name: 'Ethereum', symbol: 'ETH', icon: '/Asserts/ICON/eth.png' },
    { name: 'Solana', symbol: 'SOL', icon: '/Asserts/ICON/sol.png' },
    { name: 'Binance', symbol: 'BNB', icon: '/Asserts/ICON/bnb.png' },
    { name: 'Roosterswap', symbol: 'ROOSTER', icon: '/Asserts/logo.png' },
];

export default function Swap() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalForPay, setModalForPay] = useState(true); // To track which token pair is being changed
    const [selectedTokenPay, setSelectedTokenPay] = useState(tokens[0]);
    const [selectedTokenGet, setSelectedTokenGet] = useState(tokens[1]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTokens, setFilteredTokens] = useState(tokens);

    useEffect(() => {
        setFilteredTokens(
            tokens.filter(token =>
                token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery]);

    const handleTokenSelect = (token) => {
        if (modalForPay) {
            setSelectedTokenPay(token);
        } else {
            setSelectedTokenGet(token);
        }
        setIsModalOpen(false);
    };

    const handleSwap = () => {
        const temp = selectedTokenPay;
        setSelectedTokenPay(selectedTokenGet);
        setSelectedTokenGet(temp);
    };

    const getFilteredTokensForModal = () => {
        if (modalForPay) {
            return filteredTokens.filter(token => token.symbol !== selectedTokenGet.symbol);
        } else {
            return filteredTokens.filter(token => token.symbol !== selectedTokenPay.symbol);
        }
    };
    const [cntWallet, setCNTWallet] = useState(false)

    return (
        <>
            <Helmet>
                <title>Roosterswap | Swap</title>
            </Helmet>
            <div className='new'>

                <nav style={{ position: "relative", zIndex: "1" }}>
                    <div className='nav-title'>
                        <img src='/Asserts/logo.png' alt='logo'></img>
                        <h1>$ROOSTERSWAP</h1>
                    </div>
                    <div className='nav-items farm'>
                        <div className='nav-item mid'>
                            <Link to="/">HOME</Link>
                            <Link to="/swap">SWAP</Link>
                            <Link to="/farm">FARM</Link>
                            {cntWallet ? <p className='connect-wallet soon'>Coming Soon</p> : <p className='connect-wallet' onClick={() => { setCNTWallet(true) }}>Connect Wallet</p>}
                        </div>
                        <div className='nav-item left'>
                            <a href='/'><i className="fa-brands fa-twitter"></i></a>
                            <a href='/'><i className="fa-brands fa-telegram"></i></a>
                        </div>
                    </div>
                </nav>
                <div className='farm-section'>
                    <img className="home-abs swap" src='/Asserts/abstract.jpg' alt='abstract'></img>
                    <div className='swap-container swap'>
                        <div className='swap-title' style={{ paddingBottom: "50px" }}>
                            <h1>Experience the Decentralized Platform</h1>
                            <p>Select the coin you want to convert and enter the amount. The swap will complete once the transaction is confirmed.</p>
                        </div>
                        <div className='swap-container-mobile'>
                            <div className='swap-title-mobile' style={{ paddingBottom: "50px" }}>
                                <h1>Rooster Swap</h1>
                            </div>
                        </div>
                        <div className='swap-container-inner'>
                            <div className='you-pay-container'>
                                <div className='icon-pair' onClick={() => { setIsModalOpen(true); setModalForPay(true); }}>
                                    <img src={selectedTokenPay.icon} alt={selectedTokenPay.name}></img>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className='input-pairs'>
                                    <label>You Pay</label>
                                    <div className='inner-input-pair'>
                                        <input type='number' min={0} defaultValue={0.0}></input>
                                        <label>{selectedTokenPay.symbol}</label>
                                    </div>
                                </div>
                            </div>
                            <div className='swap-icon' onClick={handleSwap}>
                                <i className="fa-solid fa-retweet"></i>
                            </div>
                            <div className='you-pay-container'>
                                <div className='icon-pair' onClick={() => { setIsModalOpen(true); setModalForPay(false); }}>
                                    <img src={selectedTokenGet.icon} alt={selectedTokenGet.name}></img>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </div>
                                <div className='input-pairs'>
                                    <label>You Get</label>
                                    <div className='inner-input-pair'>
                                        <input type='number' min={0} defaultValue={0.0}></input>
                                        <label>{selectedTokenGet.symbol}</label>
                                    </div>
                                </div>
                            </div>
                            <button className='buy-btn'>Coming Soon...</button>

                            {isModalOpen && (
                                <div className='swap-container-inner upper'>
                                    <div className="select-inner-container">
                                        <div className='select-header'>
                                            <p>Select token</p>
                                            <i className="fa-solid fa-xmark" onClick={() => setIsModalOpen(false)}></i>
                                        </div>
                                        <div className='select-search'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <input
                                                type='text'
                                                placeholder='Search by name or symbol'
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            ></input>
                                        </div>
                                        {getFilteredTokensForModal().map(token => (
                                            <div
                                                className='token-select-pair'
                                                key={token.symbol}
                                                onClick={() => handleTokenSelect(token)}
                                            >
                                                <img src={token.icon} alt={token.name}></img>
                                                <div className='select-pairs-symbols'>
                                                    <h4>{token.name}</h4>
                                                    <h5>{token.symbol}</h5>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
