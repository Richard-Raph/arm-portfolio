import '../assets/css/HHero.css';
import { useEffect, useState } from 'react';
import { HiPlus, HiOutlineArrowDown } from 'react-icons/hi2';

const HHero = () => {
    const [textRotation, setTextRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newRotation = scrollY * 0.1;
            setTextRotation(newRotation);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='Hhero'>
            <div className='Hhero-container'>
                <span className='glare outer'></span>
                <div className='window-outline'>
                    <span className='glare inner'></span>
                    <div className='window-main'>
                        <div className='shine'>
                            <div className='small'></div>
                            <div className='big'></div>
                        </div>
                        <div className='window-bar'>
                            <div className='window-dots'>
                                <span className='dot red'></span>
                                <span className='dot yellow'></span>
                                <span className='dot green'></span>
                            </div>
                            <HiPlus />
                        </div>
                        <div className='window-content'>
                            <h1 className='slant-text'>Richard</h1>
                            <div className='Hhero-content' style={{ transform: `rotate(-${textRotation}deg)` }}>
                                <div className='Hhero-detail'>
                                    <div className='Hhero-text'>
                                        <h1>Web developer</h1>
                                        <span></span>
                                        <h1>Design evangelist</h1>
                                        <span></span>
                                        <h1>Host of Nodes of Design Podcast</h1>
                                        <span></span>
                                    </div>
                                    <div className='Hhero-text'>
                                        <h1>Web designer</h1>
                                        <span></span>
                                        <h1>Design evangelist</h1>
                                        <span></span>
                                        <h1>Host of Nodes of Design Podcast</h1>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='Hhero-detail'>
                                    <div className='Hhero-text'>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                    </div>
                                    <div className='Hhero-text'>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Hhero-fade'>
                <a href='#about'><HiOutlineArrowDown /></a>
            </div>
        </section>
    );
}

export default HHero;