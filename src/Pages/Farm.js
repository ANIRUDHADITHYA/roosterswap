import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Farm() {
    const [cntWallet, setCNTWallet] = useState(false)
    return (
        <>
            <Helmet>
                <title>Roosterswap | Farm</title>
            </Helmet>
            <div>
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
                    <div className='swap-container farm'>
                        <div className='swap-title' style={{ paddingBottom: "50px" }}>
                            <h1>Explore Roosterswap Farming</h1>
                            <p>Boost your token's yield on any Roosterswap Staking Farm</p>
                        </div>
                    </div>
                    <div className='swap-container-mobile'>
                        <div className='swap-title' style={{ paddingBottom: "50px" }}>
                            <h1>Roosterswap Farming</h1>
                        </div>
                    </div>
                    <div className='farm-container'>
                        <div className='farm-header'>
                            <p>All Chains</p>
                            <img src='/Asserts/ICON/btc.png'></img>
                            <img src='/Asserts/ICON/eth.png'></img>
                            <img src='/Asserts/ICON/bnb.png'></img>
                            <img src='/Asserts/ICON/sol.png'></img>
                        </div>
                        <div className='farm-table-header'>
                            <p>Token Pair</p>
                            <p>APR</p>
                        </div>

                        <div className='token-pairs'>
                            <div className='token-pair-logo'>
                                <img src='/Asserts/logo.png' className='rooster'></img>
                                <img src='/Asserts/ICON/SOL.png' className='even-pair'></img>
                            </div>
                            <div className='token-pair-name'>
                                <h3>ROOSTER.SOL</h3>
                                <p>TBA</p>
                            </div>
                            <div className='token-apr'>TBA</div>
                        </div>
                        <div className='token-pairs'>
                            <div className='token-pair-logo'>
                                <img src='/Asserts/logo.png' className='rooster'></img>
                                <img src='/Asserts/ICON/usdt.png' className='even-pair'></img>
                            </div>
                            <div className='token-pair-name'>
                                <h3>ROOSTER.USDT</h3>
                                <p>TBA</p>
                            </div>
                            <div className='token-apr'>TBA</div>
                        </div>
                        <div className='token-pairs'>
                            <div className='token-pair-logo'>
                                <img src='/Asserts/logo.png' className='rooster'></img>
                                <img src='/Asserts/ICON/usdc.png' className='even-pair'></img>
                            </div>
                            <div className='token-pair-name'>
                                <h3>ROOSTER.USDC</h3>
                                <p>TBA</p>
                            </div>
                            <div className='token-apr'>TBA</div>
                        </div>
                        <button className='buy-btn farm'>Coming Soon...</button>
                    </div>
                </div>
            </div>
        </>
    )
}
