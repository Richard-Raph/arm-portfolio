import './HAbout.css';
import About from '../../assets/images/f.png';
import Doodle from '../../assets/images/doodle.webp';

const HAbout = () => {
    return (
        <section className='habout' data-aos='fade-up' id='about'>
            <h1 className='slant-text'>About Me</h1>
            {/* <div className='paper'>
                <div className='pin'>
                    <span className='metal'></span>
                    <span className='shadow'></span>
                    <span className='bottom-circle'></span>
                </div>
                <h2>About Me</h2>
            </div> */}
            <div className='habout-content'>
                <div className='habout-img'>
                    <img src={Doodle} alt='doodle' />
                    <img src={About} alt='about-me' />
                </div>
                <div className='habout-text'>
                    <div className='paper'>
                        <div className='lines'>
                            <div>lorem ipsus djjwj</div>
                        </div>
                        <div className='holes hole-top'></div>
                        <div className='holes hole-middle'></div>
                        <div className='holes hole-bottom'></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HAbout;
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