import PropTypes from 'prop-types';
import { createContext } from 'react';
import useCustomCursor from './useCustomCursor';

export const MouseContext = createContext({
  cursorType: '',
});

const MouseContextProvider = ({ children }) => {
  useCustomCursor();

  return (
    <MouseContext.Provider value={{ cursorType: 'default' }}>
      {children}
    </MouseContext.Provider>
  );
};

MouseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MouseContextProvider;