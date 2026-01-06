import React, { useEffect, useRef, useCallback } from 'react';

const NeuralBackground = ({ theme }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);

    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 150;
    const MOUSE_ATTRACTION_DISTANCE = 200;

    const createParticle = useCallback((width, height) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2
    }), []);

    const initParticles = useCallback((width, height) => {
        particlesRef.current = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particlesRef.current.push(createParticle(width, height));
        }
    }, [createParticle]);

    const updateParticles = useCallback((width, height, time) => {
        particlesRef.current.forEach(particle => {
            // Mouse attraction
            const dx = mouseRef.current.x - particle.x;
            const dy = mouseRef.current.y - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < MOUSE_ATTRACTION_DISTANCE && dist > 0) {
                const force = (MOUSE_ATTRACTION_DISTANCE - dist) / MOUSE_ATTRACTION_DISTANCE * 0.02;
                particle.vx += (dx / dist) * force;
                particle.vy += (dy / dist) * force;
            }

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Damping
            particle.vx *= 0.99;
            particle.vy *= 0.99;

            // Bounce off edges
            if (particle.x < 0 || particle.x > width) {
                particle.vx *= -1;
                particle.x = Math.max(0, Math.min(width, particle.x));
            }
            if (particle.y < 0 || particle.y > height) {
                particle.vy *= -1;
                particle.y = Math.max(0, Math.min(height, particle.y));
            }

            // Pulse opacity
            particle.currentOpacity = particle.opacity * (0.7 + 0.3 * Math.sin(time * 0.002 + particle.pulsePhase));
        });
    }, []);

    const draw = useCallback((ctx, width, height, time) => {
        // Cyberpunk Aurora colors: cyan primary, with purple secondary
        const primaryColor = theme === 'matrix' ? '0, 255, 0' : '0, 212, 255';  // Cyan
        const secondaryColor = theme === 'matrix' ? '0, 200, 0' : '168, 85, 247'; // Purple

        ctx.clearRect(0, 0, width, height);

        // Draw connections with gradient effect
        for (let i = 0; i < particlesRef.current.length; i++) {
            for (let j = i + 1; j < particlesRef.current.length; j++) {
                const p1 = particlesRef.current[i];
                const p2 = particlesRef.current[j];
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DISTANCE) {
                    const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.4;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(${primaryColor}, ${opacity})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }

        // Draw particles with dual-color glow
        particlesRef.current.forEach((particle, index) => {
            const useSecondary = index % 3 === 0; // Every 3rd particle uses secondary color
            const color = useSecondary ? secondaryColor : primaryColor;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${particle.currentOpacity})`;
            ctx.fill();

            // Enhanced glow effect
            const gradient = ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.radius * 5
            );
            gradient.addColorStop(0, `rgba(${color}, ${particle.currentOpacity * 0.6})`);
            gradient.addColorStop(0.5, `rgba(${color}, ${particle.currentOpacity * 0.2})`);
            gradient.addColorStop(1, `rgba(${color}, 0)`);
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius * 5, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        });

        // Draw mouse connection lines
        const mouseParticles = particlesRef.current.filter(p => {
            const dx = mouseRef.current.x - p.x;
            const dy = mouseRef.current.y - p.y;
            return Math.sqrt(dx * dx + dy * dy) < MOUSE_ATTRACTION_DISTANCE;
        });

        mouseParticles.forEach(particle => {
            const dx = mouseRef.current.x - particle.x;
            const dy = mouseRef.current.y - particle.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const opacity = (1 - dist / MOUSE_ATTRACTION_DISTANCE) * 0.6;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(${primaryColor}, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
        });
    }, [theme]);

    const animate = useCallback((time) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        updateParticles(width, height, time);
        draw(ctx, width, height, time);

        animationRef.current = requestAnimationFrame(animate);
    }, [updateParticles, draw]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles(canvas.width, canvas.height);
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [initParticles, animate]);

    return (
        <canvas
            ref={canvasRef}
            className="neural-background interactive"
            style={{ opacity: 0.6 }}
        />
    );
};

export default NeuralBackground;
