import React from 'react';

const ScrollKey = ({ scrollPercentage = 60, zindex = 1}) => {
    const scrollDown = () => {
        const scrollAmount = window.innerHeight * (scrollPercentage / 100);
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth',
        });
    };
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
          });
    };
  
    return (
        <div className="scroll-wrapper" style={{zIndex: zindex}}>
            <button className="scroll-btn" onClick={scrollUp}>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16 L12 8 L20 16" fill="none" stroke="#27272a" strokeWidth={1}/>
                </svg>
            </button>
            <button className="scroll-btn" onClick={scrollDown}>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M4 8 L12 16 L20 8" fill="none" stroke="#27272a" strokeWidth={1}/>
                </svg> 
            </button>
        </div>
    );
};

export default ScrollKey;