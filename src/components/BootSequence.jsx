import React, { useState, useEffect, useCallback } from 'react';

// Cinematic intro sequence with letter-by-letter typing
const BootSequence = ({ onComplete }) => {
    const [phase, setPhase] = useState('glitch'); // glitch -> name -> tagline -> ready
    const [displayedName, setDisplayedName] = useState('');
    const [displayedTagline, setDisplayedTagline] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [glitchText, setGlitchText] = useState('');

    const NAME = "SAJITH J";
    const TAGLINE = "AI/ML Engineer • Building the Future with Intelligence";
    const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;':\",./<>?0123456789";

    // Cursor blink effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);
        return () => clearInterval(cursorInterval);
    }, []);

    // Glitch phase - random characters before name
    useEffect(() => {
        if (phase !== 'glitch') return;

        let count = 0;
        const maxCount = 15;

        const glitchInterval = setInterval(() => {
            const randomText = Array(8).fill(0)
                .map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
                .join('');
            setGlitchText(randomText);
            count++;

            if (count >= maxCount) {
                clearInterval(glitchInterval);
                setGlitchText('');
                setPhase('name');
            }
        }, 80);

        return () => clearInterval(glitchInterval);
    }, [phase]);

    // Name typing phase
    useEffect(() => {
        if (phase !== 'name') return;

        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < NAME.length) {
                setDisplayedName(NAME.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => setPhase('tagline'), 500);
            }
        }, 120);

        return () => clearInterval(typeInterval);
    }, [phase]);

    // Tagline typing phase
    useEffect(() => {
        if (phase !== 'tagline') return;

        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < TAGLINE.length) {
                setDisplayedTagline(TAGLINE.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => setPhase('ready'), 1000);
            }
        }, 40);

        return () => clearInterval(typeInterval);
    }, [phase]);

    // Complete phase
    useEffect(() => {
        if (phase !== 'ready') return;

        const completeTimer = setTimeout(() => {
            onComplete();
        }, 800);

        return () => clearTimeout(completeTimer);
    }, [phase, onComplete]);

    return (
        <div className="boot-container">
            {/* Animated gradient background overlay */}
            <div className="boot-gradient-overlay"></div>

            {/* Scan lines effect */}
            <div className="scanlines"></div>

            {/* Main content */}
            <div className="boot-content">
                {/* Glitch phase */}
                {phase === 'glitch' && (
                    <div className="glitch-container">
                        <span className="glitch-text">{glitchText}</span>
                    </div>
                )}

                {/* Name reveal */}
                {(phase === 'name' || phase === 'tagline' || phase === 'ready') && (
                    <div className="name-container">
                        <h1 className="hero-name">
                            {displayedName.split('').map((char, i) => (
                                <span
                                    key={i}
                                    className="name-char"
                                    style={{
                                        animationDelay: `${i * 0.05}s`,
                                        opacity: 1
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                            {phase === 'name' && showCursor && <span className="typing-cursor">|</span>}
                        </h1>
                    </div>
                )}

                {/* Tagline */}
                {(phase === 'tagline' || phase === 'ready') && (
                    <div className="tagline-container">
                        <p className="hero-tagline">
                            {displayedTagline}
                            {phase === 'tagline' && showCursor && <span className="typing-cursor">|</span>}
                        </p>
                    </div>
                )}

                {/* Ready indicator */}
                {phase === 'ready' && (
                    <div className="ready-container">
                        <div className="loading-bar">
                            <div className="loading-fill"></div>
                        </div>
                        <p className="ready-text">Initializing terminal interface...</p>
                    </div>
                )}
            </div>

            {/* Bottom decoration */}
            <div className="boot-footer">
                <span className="version-text">Neural Terminal v2.0</span>
            </div>
        </div>
    );
};

export default BootSequence;
