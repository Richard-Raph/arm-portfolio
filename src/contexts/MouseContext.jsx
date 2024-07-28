import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState('');

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

MouseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MouseContextProvider;