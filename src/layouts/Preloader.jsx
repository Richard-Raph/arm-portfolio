import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    if (window.lord) {
      window.lord.init();
    }
  }, []);

  return (
    <div className='preloader'>
      <lord-icon
        delay='1500'
        trigger='loop'
        state='in-reveal'
        style={{ width: '100px', height: '100px' }}
        src='https://cdn.lordicon.com/gyevrheg.json'
        colors='primary:#000000,secondary:#794628,tertiary:#ffffff,quaternary:#000000,quinary:#000000'
      ></lord-icon>
    </div>
  );
}