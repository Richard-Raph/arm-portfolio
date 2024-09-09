import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

export default function Typewriter({
    text = '',
    speed = 200,
    eraseSpeed = 300,
    eraseDelay = 1000,
    typingDelay = 1000,
}) {
    const [isTyping, setIsTyping] = useState(true);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const getRawText = useCallback(() => {
        return typeof text === 'string' ? [text] : [...text];
    }, [text]);

    const type = useCallback(() => {
        const rawText = getRawText()[currentIndex];
        if (currentText.length < rawText.length) {
            setCurrentText(prev => prev + rawText.charAt(currentText.length));
        }
    }, [currentText, currentIndex, getRawText]);

    const erase = useCallback(() => {
        if (currentText.length > 0) {
            setCurrentText(prev => prev.slice(0, -1));
        } else {
            const textArray = getRawText();
            let index = (currentIndex + 1) % textArray.length;
            setCurrentIndex(index);
            setIsTyping(true);
        }
    }, [currentText, currentIndex, getRawText]);

    useEffect(() => {
        let timeoutId;

        const handleTyping = () => {
            if (isTyping) {
                const rawText = getRawText()[currentIndex];
                if (currentText.length < rawText.length) {
                    timeoutId = setTimeout(type, speed);
                } else {
                    setIsTyping(false);
                    timeoutId = setTimeout(erase, eraseDelay);
                }
            } else if (currentText.length === 0) {
                const textArray = getRawText();
                let index = (currentIndex + 1) % textArray.length;
                if (index === currentIndex) {
                    setIsTyping(true);
                    timeoutId = setTimeout(() => {
                        setCurrentIndex(index);
                        handleTyping();
                    }, typingDelay);
                } else {
                    setCurrentIndex(index);
                    handleTyping();
                }
            } else {
                timeoutId = setTimeout(erase, eraseSpeed);
            }
        };

        handleTyping();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [currentText, isTyping, currentIndex, speed, eraseDelay, eraseSpeed, typingDelay, getRawText, type, erase]);

    return ( <code>Richard Raphael {currentText}</code> );
}

Typewriter.propTypes = {
    speed: PropTypes.number,
    eraseSpeed: PropTypes.number,
    eraseDelay: PropTypes.number,
    typingDelay: PropTypes.number,
    text: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired
};