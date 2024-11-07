import Menu from './Menu';
import Dock from './Dock';
import '../assets/css/Layout.css';
import PropTypes from 'prop-types';
import bg from '../assets/images/bg.webp';

export default function Layout({
    windows,
    children,
    openWindow,
    activeWindow,
}) {
    return (
        <>
            <svg width='219' height='147' viewBox='0 0 219 147' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <rect opacity='0.18' x='10.4252' y='75.8326' width='7.50168' height='7.50168'
                    transform='rotate(110.283 10.4252 75.8326)' fill='#686868' stroke='white' strokeWidth='1.22683' />
                <rect opacity='0.18' x='180.869' y='138.825' width='7.50168' height='7.50168'
                    transform='rotate(110.283 180.869 138.825)' fill='#686868' stroke='white' strokeWidth='1.22683' />
                <rect x='69.4713' y='-91.84' width='180.485' height='180.485' transform='rotate(20.2832 69.4713 -91.84)'
                    stroke='white' strokeOpacity='0.1' strokeWidth='1.22683' />
            </svg>
            <svg width='232' height='191' viewBox='0 0 232 191' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='50.5685' cy='172.432' r='112.068' stroke='white' strokeOpacity='0.09' />
                <g opacity='0.1'>
                    <path d='M26.4932 5.20547L228.856 172.432' stroke='#D9D9D9' />
                    <rect x='22.4384' y='0.5' width='6.15753' height='6.15753' fill='#686868' stroke='white' />
                    <rect x='224.801' y='169.027' width='6.15753' height='6.15753' fill='#686868' stroke='white' />
                    <circle cx='121.819' cy='83.613' r='1.7774' fill='#323232' stroke='white' />
                </g>
            </svg>
            <Menu activeWindow={activeWindow} windows={windows} />
            <main>
                {children}
                <img src={bg} alt='background' />
            </main>
            <Dock openWindow={openWindow} activeWindow={activeWindow} />
        </>
    );
}

Layout.propTypes = {
    windows: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    openWindow: PropTypes.func.isRequired,
    activeWindow: PropTypes.number.isRequired,
};