import '../assets/css/Window.css';
import PropTypes from 'prop-types';

export default function Window({ children }) {
    return (
        <section className='window'>
            <span></span>
            <span className='glare outer'></span>
            <div className='window-outline'>
                <span className='glare inner'></span>
                <div className='window-main'>
                    <div className='window-bar'>
                        <span className='dot red'></span>
                        <span className='dot yellow'></span>
                        <span className='dot green'></span>
                    </div>
                    <div className='window-content'>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

Window.propTypes = {
    children: PropTypes.node.isRequired,
};