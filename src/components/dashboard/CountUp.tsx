import { CountUpProps } from '@/app/dashboard/types';
import React, { useEffect, useRef, useState } from 'react'

function CountUp({ end, duration = 500 }:  CountUpProps ) {
    const [count, setCount] = useState<number>(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    if (start === end) return;

                    const incrementTime = (duration / end);

                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start === end) clearInterval(timer);
                    }, incrementTime);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [end, duration]);
    return <span ref={ref}>{count}</span>;
}
export default CountUp