import '../assets/css/HAbout.css';
import About from '../assets/images/f.png';
import Doodle from '../assets/images/doodle.webp';
import Typewriter from '../components/Typewriter';

const HAbout = () => {
    return (
        <section className='habout' data-aos='fade-up' id='about'>
            <h1 className='slant-text'>About Me</h1>
            <div className='paper'>
                <div className='pin'>
                    <span className='metal'></span>
                    <span className='shadow'></span>
                    <span className='bottom-circle'></span>
                </div>
                <h2>About Me</h2>
            </div>
            <div className='habout-content'>
                <div className='habout-img'>
                    <img src={Doodle} alt='doodle' />
                    <img src={About} alt='about-me' />
                </div>
                <div className='habout-text'>
                    <div className='lines'>
                        <div>
                            <span>Welcome To My Digital Living Room.</span>
                            <Typewriter text={'is the name, Development is my game.'} />
                        </div>
                    </div>
                    <span className='holes top'></span>
                    <span className='holes middle'></span>
                    <span className='holes bottom'></span>
                </div>
            </div>
        </section>
    );
}

export default HAbout;
{/* <div className='notepad'>
  <div className='top'></div>
  <div className='paper' contentEditable='true'></div>
</div> */}