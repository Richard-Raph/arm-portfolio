import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';

const TitleContext = createContext();

export function TitleProvider({ children }) {
  const [title, setTitle] = useState('Richard Raphael 👨🏿‍💻');

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

TitleProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default TitleContext;