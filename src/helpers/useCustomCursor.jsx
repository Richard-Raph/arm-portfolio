import { useEffect } from 'react';

const useCustomCursor = () => {
  useEffect(() => {
    const isElementWithText = (element) => {
      // Check if the element's first child is a text node
      if (element.childNodes.length > 0 && element.childNodes[0].nodeType === Node.TEXT_NODE && element.childNodes[0].textContent.trim().length > 0) {
        return true;
      }

      // Check if the element contains only text content
      if (element.childNodes.length === 0 && element.textContent.trim().length > 0) {
        return true;
      }

      // Check if any direct child of the element is a text node
      return Array.from(element.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
    };

    const handleMouseMove = (event) => {
      const { target } = event;

      if (isElementWithText(target)) {
        target.classList.add('text');
      } else {
        target.classList.remove('text');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export default useCustomCursor;