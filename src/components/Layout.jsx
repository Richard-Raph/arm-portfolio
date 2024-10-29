import DockBar from './DockBar';
import PropTypes from 'prop-types';

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