import React from 'react';

const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const useCountUp = (endValue: number, duration: number = 2000): number => {
    const [count, setCount] = React.useState(0);
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    const countRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        let frame = 0;
        const counter = () => {
            frame++;
            const progress = easeOutExpo(frame / totalFrames);
            const currentCount = Math.round(endValue * progress);
            setCount(currentCount);

            if (frame < totalFrames) {
                countRef.current = requestAnimationFrame(counter);
            } else {
                setCount(endValue); // Ensure final value is exact
            }
        };
        countRef.current = requestAnimationFrame(counter);
        
        return () => {
            if(countRef.current) cancelAnimationFrame(countRef.current);
        };
    }, [endValue, duration, totalFrames]);

    return count;
};