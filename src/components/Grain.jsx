import { useRef, useEffect, useCallback } from 'react';

export default function Grain() {
    const canvasRef = useRef(null);
    const patternCanvasRef = useRef(null);

    const patternSize = 200;
    const patternAlpha = 10;
    const patternRefreshInterval = 5;

    const resize = useCallback(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth * devicePixelRatio;
            canvas.height = window.innerHeight * devicePixelRatio;
        }
    }, []);

    const update = useCallback(() => {
        const patternCanvas = patternCanvasRef.current;
        if (patternCanvas) {
            const patternCtx = patternCanvas.getContext('2d');
            const patternPixelDataLength = patternSize * patternSize * 4;
            const patternData = patternCtx.createImageData(patternSize, patternSize);

            for (let i = 0; i < patternPixelDataLength; i += 4) {
                const value = Math.random() * 255;

                patternData.data[i] = value;
                patternData.data[i + 1] = value;
                patternData.data[i + 2] = value;
                patternData.data[i + 3] = patternAlpha;
            }

            patternCtx.putImageData(patternData, 0, 0);
        }
    }, [patternAlpha]);

    const draw = useCallback(() => {
        const canvas = canvasRef.current;
        const patternCanvas = patternCanvasRef.current;
        if (canvas && patternCanvas) {
            const ctx = canvas.getContext('2d');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const pattern = ctx.createPattern(patternCanvas, 'repeat');
            if (pattern) {
                ctx.fillStyle = pattern;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
    }, []);

    const loop = useCallback(() => {
        let frame = 0;

        const animate = () => {
            const shouldDraw = ++frame % patternRefreshInterval === 0;
            if (shouldDraw) {
                update();
                draw();
            }

            window.requestAnimationFrame(animate);
        };

        animate();
    }, [update, draw, patternRefreshInterval]);

    useEffect(() => {
        resize();
        loop();
        
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [resize, loop]);

    return (
        <>
            <canvas ref={canvasRef} className='grain' />
            <canvas
                width={patternSize}
                height={patternSize}
                ref={patternCanvasRef}
                style={{ display: 'none' }}
            />
        </>
    );
}