import './HAbout.css';

const HAbout = () => {
    return (
        <section className='habout' data-aos='fade-up' id='about'>
            <div className='paper'>
                <div className='pin'>
                    <span className='metal'></span>
                    <span className='shadow'></span>
                    <span className='bottom-circle'></span>
                </div>
                <h2>About Me</h2>
            </div>
        </section>
    );
}

export default HAbout;
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