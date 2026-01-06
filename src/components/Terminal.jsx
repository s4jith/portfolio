import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../styles/terminal.css';
import NeuralBackground from './NeuralBackground';
import BootSequence from './BootSequence';
import { executeCommand, getAutocompleteSuggestions } from '../utils/CommandParser';
import { playSound } from '../utils/SoundManager';

const Terminal = () => {
    const [booted, setBooted] = useState(false);
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [currentInput, setCurrentInput] = useState('');
    const [theme, setTheme] = useState('default');
    const [soundEnabled, setSoundEnabled] = useState(true);
    const inputRef = useRef(null);
    const contentRef = useRef(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [history]);

    // Focus input on click anywhere
    const handleContainerClick = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // Boot complete handler
    const handleBootComplete = useCallback(() => {
        setBooted(true);
        setHistory([{
            type: 'system',
            content: "Type 'help' to see available commands."
        }]);
        if (soundEnabled) playSound('boot');
    }, [soundEnabled]);

    // Handle command submission
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();

        const trimmedInput = currentInput.trim();

        // Add command to history display
        setHistory(prev => [...prev, {
            type: 'command',
            content: trimmedInput
        }]);

        if (trimmedInput) {
            // Add to command history for up/down navigation
            setCommandHistory(prev => [...prev, trimmedInput]);
            setHistoryIndex(-1);

            if (soundEnabled) playSound('enter');

            // Execute command
            const result = await executeCommand(trimmedInput, { theme, setTheme, soundEnabled, setSoundEnabled });

            if (result) {
                if (result.type === 'clear') {
                    setHistory([]);
                } else {
                    setHistory(prev => [...prev, result]);
                }
            }
        }

        setCurrentInput('');
    }, [currentInput, theme, soundEnabled]);

    // Handle keyboard navigation
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex < commandHistory.length - 1
                    ? historyIndex + 1
                    : historyIndex;
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
                if (soundEnabled) playSound('navigate');
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
                if (soundEnabled) playSound('navigate');
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setCurrentInput('');
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            const suggestions = getAutocompleteSuggestions(currentInput);
            if (suggestions.length === 1) {
                setCurrentInput(suggestions[0]);
                if (soundEnabled) playSound('tab');
            } else if (suggestions.length > 1) {
                // Show suggestions
                setHistory(prev => [...prev, {
                    type: 'suggestions',
                    content: suggestions.join('  ')
                }]);
            }
        } else if (e.key.length === 1) {
            if (soundEnabled) playSound('key');
        }
    }, [commandHistory, historyIndex, currentInput, soundEnabled]);

    // Handle input change
    const handleInputChange = useCallback((e) => {
        setCurrentInput(e.target.value);
    }, []);

    return (
        <div
            className={`terminal-container ${theme === 'matrix' ? 'theme-matrix' : ''}`}
            onClick={handleContainerClick}
        >
            <NeuralBackground theme={theme} />

            <div className="terminal-content" ref={contentRef}>
                {!booted ? (
                    <BootSequence onComplete={handleBootComplete} />
                ) : (
                    <>
                        {history.map((item, index) => (
                            <div key={index} className="output-block">
                                {item.type === 'command' && (
                                    <div className="command-line">
                                        <span className="prompt">
                                            <span className="prompt-user">sajith</span>
                                            <span className="prompt-separator">@</span>
                                            <span className="prompt-path">neural-net</span>
                                            <span className="prompt-separator">:</span>
                                            <span className="prompt-path">~</span>
                                            <span className="prompt-symbol">$ </span>
                                        </span>
                                        <span>{item.content}</span>
                                    </div>
                                )}
                                {item.type === 'output' && (
                                    <div className="output-content" dangerouslySetInnerHTML={{ __html: item.content }} />
                                )}
                                {item.type === 'component' && item.content}
                                {item.type === 'system' && (
                                    <div className="output-info">{item.content}</div>
                                )}
                                {item.type === 'error' && (
                                    <div className="output-error">{item.content}</div>
                                )}
                                {item.type === 'suggestions' && (
                                    <div className="output-dim">{item.content}</div>
                                )}
                            </div>
                        ))}

                        <form onSubmit={handleSubmit} className="command-line">
                            <span className="prompt">
                                <span className="prompt-user">sajith</span>
                                <span className="prompt-separator">@</span>
                                <span className="prompt-path">neural-net</span>
                                <span className="prompt-separator">:</span>
                                <span className="prompt-path">~</span>
                                <span className="prompt-symbol">$ </span>
                            </span>
                            <div className="command-input-wrapper">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="command-input"
                                    value={currentInput}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    autoFocus
                                    autoComplete="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                />
                                <span className="cursor"></span>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Terminal;
