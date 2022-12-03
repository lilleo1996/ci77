import { useState, useRef, useEffect } from "react";

const useHover = () => {
    const [isHover, setIsHover] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const element = elementRef.current;
        const handleMouseEnter = () => {
            setIsHover(true);
        }

        const handleMouseLeave = () => {
            setIsHover(false);
        }

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [])

    return [elementRef, isHover];
}

export default useHover;