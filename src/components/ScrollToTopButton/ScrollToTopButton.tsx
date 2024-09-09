import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import './scrollToTopButoon.css';

const ScrollToTopButton = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollToTop(true);
        } else {
            setShowScrollToTop(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        showScrollToTop && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <Icon icon='tabler:arrow-up' width='20' />
            </button>
        )
    )
}

export default ScrollToTopButton;