// Sound effects manager for terminal
const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || window.webkitAudioContext)() : null;

const sounds = {
    key: { frequency: 400, duration: 0.05, type: 'sine' },
    enter: { frequency: 600, duration: 0.1, type: 'sine' },
    tab: { frequency: 800, duration: 0.08, type: 'sine' },
    navigate: { frequency: 300, duration: 0.06, type: 'triangle' },
    error: { frequency: 200, duration: 0.15, type: 'sawtooth' },
    boot: { frequency: 500, duration: 0.3, type: 'sine' },
    success: { frequency: 700, duration: 0.15, type: 'sine' },
};

export const playSound = (soundName) => {
    if (!audioContext) return;

    const sound = sounds[soundName];
    if (!sound) return;

    try {
        // Resume audio context if suspended (browser autoplay policy)
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = sound.type;
        oscillator.frequency.setValueAtTime(sound.frequency, audioContext.currentTime);

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + sound.duration);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + sound.duration);
    } catch (e) {
        // Silently fail if audio context has issues
        console.debug('Sound playback failed:', e);
    }
};

export const playBootSequence = () => {
    if (!audioContext) return;

    const frequencies = [200, 300, 400, 500, 600, 700, 800];

    frequencies.forEach((freq, index) => {
        setTimeout(() => {
            try {
                if (audioContext.state === 'suspended') {
                    audioContext.resume();
                }

                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);

                gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (e) {
                console.debug('Boot sound failed:', e);
            }
        }, index * 100);
    });
};
