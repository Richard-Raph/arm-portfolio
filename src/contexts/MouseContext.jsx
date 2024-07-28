// import PropTypes from 'prop-types';
// import { createContext, useState } from 'react';

// export const MouseContext = createContext({
//   cursorType: '',
//   cursorChangeHandler: () => {},
// });

// const MouseContextProvider = (props) => {
//   const [cursorType, setCursorType] = useState('');

//   const cursorChangeHandler = (cursorType) => {
//     setCursorType(cursorType);
//   };

//   return (
//     <MouseContext.Provider
//       value={{
//         cursorType: cursorType,
//         cursorChangeHandler: cursorChangeHandler,
//       }}
//     >
//       {props.children}
//     </MouseContext.Provider>
//   );
// };

// MouseContextProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default MouseContextProvider;

// "use client";

// import Image from "next/image";
// import { Cursor, CursorProps } from "react-pointers";

// export default () => {
//   const props: CursorProps = {
//     default: { cursor: <PixelArtDefault /> },
//     pointer: { cursor: <PixelArtPointer />, query: ["button", "a"] },
//     wait: { cursor: <PixelArtLoading />, query: [".loading"] },
//   };

//   return <Cursor {...props} />;
// };

// const PixelArtDefault = () => (
//   <Image width={24} height={24} src="/cursors/pixel-art/default.png" alt="" />
// );

// const PixelArtPointer = () => (
//   <Image width={24} height={24} src="/cursors/pixel-art/pointer.png" alt="" />
// );

// const PixelArtLoading = () => (
//   <Image width={24} height={24} src="/cursors/pixel-art/loading.png" alt="" />
// );

// MouseContextProvider.js
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition'; // Update the path accordingly

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {},
});

const CursorImages = {
  default: '../assets/cursors/default.png',
  pointer: '../assets/cursors/pointer.png',
  wait: '../assets/cursors/loading.png',
};

const MouseContextProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState('default');
  const { x, y } = useMousePosition();

  const cursorChangeHandler = (type) => {
    setCursorType(type);
  };

  const getCursorStyle = () => ({
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    pointerEvents: 'none',
    zIndex: 9999,
    width: '24px',
    height: '24px',
    backgroundImage: `url(${CursorImages[cursorType] || CursorImages.default})`,
    backgroundSize: 'cover',
  });

  return (
    <MouseContext.Provider value={{ cursorType, cursorChangeHandler }}>
      {children}
      {/* <div style={getCursorStyle()}></div> */}
    </MouseContext.Provider>
  );
};

MouseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MouseContextProvider;