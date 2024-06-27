import React, { useEffect, useRef, useState } from 'react';
import './../App.css';
import Carousel from '../Components/Carousel';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
    const homeref = useRef(null);
    const aboutRef = useRef(null);
    const nftsRef = useRef(null);
    const tokenomicsRef = useRef(null);
    const roadmapRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const [timeRemaining, setTimeRemaining] = useState('');
    const [isCountdownOver, setIsCountdownOver] = useState(false);

    useEffect(() => {
        const targetTime = new Date();
        targetTime.setDate(targetTime.getDate() + 1); // Set target for next day
        targetTime.setHours(65, 0, 0, 0); // Set target time to 6:00 PM next day

        const updateTimer = () => {
            const currentTime = new Date();
            const timeDifference = targetTime - currentTime;

            if (timeDifference <= 0) {
                setIsCountdownOver(true);
                clearInterval(timerInterval);
            } else {
                const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
                const seconds = Math.floor((timeDifference / 1000) % 60);
                setTimeRemaining(`${hours}h : ${minutes}m : ${seconds}s`);
            }
        };

        const timerInterval = setInterval(updateTimer, 1000);

        updateTimer();

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <>
            <Helmet>
                <title>Roosterswap | Home</title>
            </Helmet>
            <nav ref={homeref} style={{ position: "relative", zIndex: "1" }}>
                <div className='nav-title'>
                    <img src='/Asserts/logo.png' alt='logo'></img>
                    <h1>$ROOSTERSWAP</h1>
                </div>
                <div className='nav-items'>
                    <div className='nav-item mid'>
                        <p onClick={() => scrollToSection(aboutRef)}>ABOUT</p>
                        <p onClick={() => scrollToSection(nftsRef)}>NFTs</p>
                        <p onClick={() => scrollToSection(tokenomicsRef)}>TOKENOMICS</p>
                        <p onClick={() => scrollToSection(roadmapRef)}>ROADMAP</p>

                    </div>
                    <div className='nav-item left'>
                        <Link to="/swap" className='dapp-application'>Open App</Link>
                        <a href='/'><i className="fa-brands fa-twitter"></i></a>
                        <a href='/'><i className="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
            </nav>
            <div className='home-section' >
                <img className="home-abs" src='/Asserts/abstract.jpg' alt='abstract'></img>
                <div className='home-container'>
                    <div className='home-title'>
                        <h1>ROOSTER SWAP</h1>
                        <p style={{ position: "relative", zIndex: "1" }}>Rooster Swap: Crowing New Heights on Solana – Swap, Trade, and Rule the Roost!</p>
                        <div className='timer-buy'>
                            {!isCountdownOver ? <h5 className='live-now' style={{ zIndex: "2" }}>LIVE NOW</h5> : <h5 >LIVE IN</h5>}
                            {!isCountdownOver ? (
                                <a href='/' className='buy-now-btn' style={{ position: "relative", zIndex: "1" }}>Buy Now in Pinksale <span><img src='/Asserts/plogo.png'></img></span></a>
                            ) : (
                                <p className='timer'>{timeRemaining}</p>
                            )}
                        </div>
                    </div>
                    <div className='home-img'>
                        <div className='outer-layer'></div>
                        <div className='mid-layer'></div>
                        <div className='inner-layer'></div>
                        <img src='/Asserts/bg.png' alt='background'></img>
                    </div>
                </div>
            </div>
            <div className='home-intro-features'>
                <p><i className="fa-solid fa-palette"></i> 1000+ NFT Collections</p>
                <p><i className="fa-solid fa-globe"></i> Community Driven</p>
                <p><i className="fa-solid fa-store"></i> NFT Marketplace</p>
                <p><i className="fa-solid fa-rotate"></i> Token Swapping</p>
            </div>
            <div className='customers-container'>
                <h1>Our <span>Partners</span></h1>
                <div className="logos">
                    <div className="logos-slide">
                        <img src='/Asserts/Customers/partner1.avif' alt='customer 1'></img>
                        <img src='/Asserts/Customers/partner2.webp' alt='customer 2'></img>
                        <img src='/Asserts/Customers/partner3.avif' alt='customer 3'></img>
                        <img src='/Asserts/Customers/partner4.avif' alt='customer 4'></img>
                        <img src='/Asserts/Customers/partner5.avif' alt='customer 5'></img>
                        <img src='/Asserts/Customers/partner6.png' alt='customer 6'></img>
                    </div>
                    <div className="logos-slide">
                        <img src='/Asserts/Customers/partner1.avif' alt='customer 1'></img>
                        <img src='/Asserts/Customers/partner2.webp' alt='customer 2'></img>
                        <img src='/Asserts/Customers/partner3.avif' alt='customer 3'></img>
                        <img src='/Asserts/Customers/partner4.avif' alt='customer 4'></img>
                        <img src='/Asserts/Customers/partner5.avif' alt='customer 5'></img>
                        <img src='/Asserts/Customers/partner6.png' alt='customer 6'></img>
                    </div>
                </div>
            </div>
            <div className='about-section' ref={aboutRef}>
                <div className='about-container'>
                    <img src='/Asserts/28.jpeg' alt='about'></img>
                    <div className='about-content'>
                        <h1>About <span>ROOSTERSWAP</span></h1>
                        <p>
                            Rooster Swap is more than just a meme token; it's a vibrant community-driven project launching on the Solana blockchain. Embodying the spirit of innovation and inclusivity, Rooster Swap aims to redefine the crypto landscape by combining the playful nature of meme tokens with the robust infrastructure of Solana.
                        </p>
                        <p>
                            Driven by a passionate team and supported by a dedicated community, Rooster Swap promises fast transactions and low fees, leveraging Solana's scalability to ensure seamless trading experiences. Our commitment to transparency and decentralization empowers users to participate in governance decisions, shaping the future of Rooster Swap.
                        </p>
                        <p>
                            With plans to develop a cutting-edge swap application and an NFT marketplace, Rooster Swap seeks to provide diverse opportunities for engagement and growth within the crypto ecosystem. Join us on this journey as we revolutionize meme tokens and soar to new heights together.
                        </p>
                        <a href='/'>Buy Now</a>
                    </div>
                </div>
            </div>
            <div ref={nftsRef}>
                <Carousel />
            </div>
            <div className='tokenomics-section' ref={tokenomicsRef}>
                <h1>TOKEN<span>OMICS</span></h1>
                <div className='tokenomics-container'>
                    <div className='tokennomics-img'>
                        <img src='/Asserts/16.jpeg' alt='tokenomics'></img>
                    </div>
                    <div className="tokenomics-content">
                        <h1>$ROOSTERSWAP</h1>
                        <p>✅ Total Supply: 1,000,000,000</p>
                        <p>✅ Presale: 50%</p>
                        <p>✅ Liquidity Pool (LP): 16.6%</p>
                        <p>✅ Marketing & Buyback Allocation: 18.4%</p>
                        <p>✅ Advisors & Partners: 5%</p>
                        <p>✅ CEX Listing & Liquidity: 10%</p>
                        <p>🤑 0% / 0% Tax</p>
                        <p>📑 CA: TBA</p>
                        <a href='/'>Checkout at Pinksale</a>
                    </div>
                </div>
            </div>
            <div className='roadmap-section' ref={roadmapRef}>
                <h1>ROAD<span>MAP</span></h1>
                <div className='roadmap-container'>
                    <div className='roadmap-qs'>
                        <h1>Phase 1</h1>
                        <p>
                            Website Launch ✅<br />
                            Socials Launch ✅<br />
                            Marketing Building ✅<br />
                            Community Building ✅<br />
                            Token Creation ✅<br />
                            Coinsult Audit + SAFU ✅<br />
                            Private Call Groups ✅<br />
                            TG & Twitter Shilling ✅<br />
                            TG & Twitter Raids ✅<br />
                        </p>
                    </div>
                    <div className='roadmap-qs'>
                        <h1>Phase 2</h1>
                        <p>
                            Pinksale Fairlaunch ✅<br />
                            Dexscreener Trending ✅<br />
                            Dextools Trending ✅<br />
                            Dexview Trending ✅<br />
                            CG / CMC Fast Tracking<br />
                            Influencer Partnerships<br />
                            New Youtube Reviews<br />
                        </p>
                    </div>
                    <div className='roadmap-qs'>
                        <h1>Phase 3</h1>
                        <p>
                            CEX Listing<br />
                            Airdrops<br />
                            NFT Marketplace<br />
                            Token Swapping<br />
                        </p>
                    </div>
                </div>
            </div>
            <footer>
                <div className='footer-main-container'>
                    <div className='footer-sub-container'>
                        <h1>ROOSTERSWAP</h1>
                        <div className='nav-item left'>
                            <a href='/'><i className="fa-brands fa-twitter"></i></a>
                            <a href='/'><i className="fa-brands fa-telegram"></i></a>
                        </div>
                    </div>
                    <div className='footer-navs'>
                        <p onClick={() => scrollToSection(homeref)}>HOME</p>
                        <p onClick={() => scrollToSection(aboutRef)}>ABOUT</p>
                        <p onClick={() => scrollToSection(tokenomicsRef)}>TOKENOMICS</p>
                        <p onClick={() => scrollToSection(roadmapRef)}>ROADMAP</p>
                    </div>
                </div>
                <p className='footer-dis'>© 2024 BY <span>ROOSTERSWAP.</span> ALL RIGHTS RESERVED!</p>
            </footer>
        </>
    );
}
