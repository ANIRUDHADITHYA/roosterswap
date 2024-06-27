import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/bundle'
import "./index.css"


const slider = [
    {
        description: "Explore the vibrant world of Rooster NFTs, each uniquely designed to crow your way to digital art mastery.",
        url: "/Asserts/1.jpeg"
    },
    {
        description: "Our Rooster NFTs showcase a dazzling array of colors and styles, perfect for any collector.",
        url: "/Asserts/2.jpeg"
    },
    {
        description: "Crowing with personality, each Rooster NFT is a masterpiece in its own right.",
        url: "/Asserts/3.jpeg"
    },
    {
        description: "Discover the charm of our Rooster NFTs, where creativity meets blockchain technology.",
        url: "/Asserts/4.jpeg"
    },
    {
        description: "Each Rooster NFT tells a story, blending tradition with the future of digital collectibles.",
        url: "/Asserts/5.jpeg"
    },
    {
        description: "Our Rooster NFTs are more than art; they are a gateway to a vibrant community.",
        url: "/Asserts/6.jpeg"
    },
    {
        description: "Join the roost and collect unique Rooster NFTs, crowing with distinct styles and flair.",
        url: "/Asserts/7.jpeg"
    },
    {
        description: "Every Rooster NFT is meticulously crafted to bring joy and value to collectors.",
        url: "/Asserts/8.jpeg"
    },
    {
        description: "Rooster NFTs: Where art, technology, and community come together.",
        url: "/Asserts/9.jpeg"
    },
    {
        description: "Stand out in the digital world with our exclusive Rooster NFT collection.",
        url: "/Asserts/10.jpeg"
    },
    {
        description: "Rooster NFTs crow loud and proud, representing a new dawn in digital art.",
        url: "/Asserts/11.jpeg"
    },
    {
        description: "Collect, trade, and enjoy the unique appeal of our Rooster NFTs.",
        url: "/Asserts/12.jpeg"
    },
    {
        description: "Our Rooster NFTs are crowing the way to the future of digital collectibles.",
        url: "/Asserts/13.jpeg"
    },
    {
        description: "Experience the artistry and innovation behind each Rooster NFT.",
        url: "/Asserts/14.jpeg"
    },
    {
        description: "Rooster NFTs are designed to be both visually stunning and highly valuable.",
        url: "/Asserts/15.jpeg"
    },
    {
        description: "Our collection of Rooster NFTs offers something special for every art enthusiast.",
        url: "/Asserts/17.jpeg"
    },
    {
        description: "Rooster NFTs: Combining tradition and technology in each unique design.",
        url: "/Asserts/18.jpeg"
    },
    {
        description: "Celebrate the digital art revolution with our exclusive Rooster NFTs.",
        url: "/Asserts/19.jpeg"
    },
    {
        description: "Every Rooster NFT is crafted with care, reflecting the spirit of our vibrant community.",
        url: "/Asserts/20.jpeg"
    },
    {
        description: "Rooster NFTs bring a new level of excitement and value to the world of digital art.",
        url: "/Asserts/21.jpeg"
    },
    {
        description: "From bold designs to intricate details, our Rooster NFTs are a collector's dream.",
        url: "/Asserts/22.jpeg"
    },
    {
        description: "Our Rooster NFT collection is a testament to creativity and innovation in digital art.",
        url: "/Asserts/23.jpeg"
    },
    {
        description: "Discover the beauty and uniqueness of each Rooster NFT in our collection.",
        url: "/Asserts/24.jpeg"
    },
    {
        description: "Rooster NFTs are your ticket to joining a dynamic and passionate community.",
        url: "/Asserts/25.jpeg"
    },
    {
        description: "Each Rooster NFT is a crowning achievement in the world of digital collectibles.",
        url: "/Asserts/26.jpeg"
    },
    {
        description: "Immerse yourself in the diverse and colorful world of Rooster NFTs.",
        url: "/Asserts/27.jpeg"
    },
    {
        description: "Rooster NFTs are more than just art; they are a celebration of creativity and community.",
        url: "/Asserts/28.jpeg"
    }
];


const Carousel = () => {
    return (
        <div className='carousel'>
            <div>
                <div className='carousel-content'>
                    <h1>Take A Look at Our Vibrant <span>NFTs</span></h1>
                </div>
            </div>

            <Swiper
                className='myswiper'
                modules={[Pagination, EffectCoverflow, Autoplay]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: true
                }}
                loop={true}

                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 2
                    },
                    1560: {
                        slidesPerView: 3
                    },
                }}

            >
                {
                    slider.map((data, index) => (
                        <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className="myswiper-slider" key={index}>
                            <div>
                                <h2>ROOSTER <span>#1802{index}</span></h2>
                                <p>{data.description}</p>
                                <a href="#" className='slider-btn'>UPCOMING</a>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <img src='/Asserts/abstract2.png' className='carousel-img'></img>
        </div>
    )
}

export default Carousel