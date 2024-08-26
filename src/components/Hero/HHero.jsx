import './HHero.css';
import { Link } from 'react-router-dom';
import { HiPlus, HiOutlineArrowDown } from 'react-icons/hi2';

const HHero = () => {
    return (
        <section className='hero'>
            <div className='hero-container'>
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
                            <div className='hero-content'>
                                <div className='hero-detail'>
                                    <div className='hero-text'>
                                        <h1>Web developer</h1>
                                        <span></span>
                                        <h1>Design evangelist</h1>
                                        <span></span>
                                        <h1>Host of Nodes of Design Podcast</h1>
                                        <span></span>
                                    </div>
                                    <div className='hero-text'>
                                        <h1>Web designer</h1>
                                        <span></span>
                                        <h1>Design evangelist</h1>
                                        <span></span>
                                        <h1>Host of Nodes of Design Podcast</h1>
                                        <span></span>
                                    </div>
                                </div>
                                <div className='hero-detail'>
                                    <div className='hero-text'>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                        <h1>Based in Nigeria</h1>
                                        <span></span>
                                    </div>
                                    <div className='hero-text'>
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
                            <span className='window-grain'></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-fade'>
                <Link to='/#about'><HiOutlineArrowDown /></Link>
            </div>
        </section>
    );
}

export default HHero;
{/* <div className='paper'>
    <div className='paper-content'>
        <textarea className='text' autoFocus></textarea>
    </div>
</div> */}

{/* <div className='paper'>
  <div className='lines'>
    <div className='text' contentEditable spellCheck='false'></div>
  </div>
  <div className='holes hole-top'></div>
  <div className='holes hole-middle'></div>
  <div className='holes hole-bottom'></div>
</div> */}

{/* <div className='notepad'>
  <div className='top'></div>
  <div className='paper' contentEditable='true'></div>
</div> */}

{/* <div className='paper'>
  <div className='pin'>
    <div className='shadow'></div>
    <div className='metal'></div>
    <div className='bottom-circle'></div>
  </div>
  <p>Contact me</p>
</div> */}