import PropTypes from 'prop-types';
import DockBar from '../components/DockBar/DockBar';

export default function Layout({ children }) {
    return (
        <>
            <DockBar />
            {children}
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};