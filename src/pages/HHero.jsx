import '../assets/css/HHero.css';
import { HiPlus, HiOutlineArrowDown } from 'react-icons/hi2';

export default function HHero() {
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
                            <div className='Hhero-content'>
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