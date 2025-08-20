import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [outputHistory, setOutputHistory] = useState<Array<{ type: 'command' | 'output' | 'error', content: string }>>([]);
  const [currentDirectory] = useState('~/portfolio');
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    'help': 'Available commands: help, about, skills, experience, projects, clear, ls, pwd, whoami, contact',
    'about': 'Hi! I\'m Usmon Khakimov, a passionate full-stack developer from Uzbekistan. I love building modern web applications and solving complex problems.',
    'skills': 'Frontend: React, TypeScript, Next.js, Tailwind CSS\nBackend: Node.js, Python, Flask, Express\nDatabase: MongoDB, PostgreSQL, MySQL\nTools: Git, Docker, AWS, Firebase',
    'experience': 'Current: Programming Instructor at Ilmla IT Talim\nPrevious: Software Engineer at GoQba Technology\nInternship: Front-end Developer at IDR Envision\nFreelance: Web Developer (2021-2023)',
    'projects': 'Featured projects:\n- Marico: Creator-audience platform\n- Movie App: Full-stack streaming app\n- Natours: Tour agency website\n- MediMatrix: Medical platform design',
    'ls': 'portfolio/\n  ├── src/\n  ├── public/\n  ├── package.json\n  ├── README.md\n  └── .gitignore',
    'pwd': currentDirectory,
    'whoami': 'usmonkhakimov',
    'contact': 'Email: usmonhakimov1999@gmail.com\nGitHub: github.com/Usmonkul\nLinkedIn: linkedin.com/in/usmonkul-khakimov',
    'clear': 'clear'
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Add welcome message
      setOutputHistory([
        { type: 'output', content: 'Welcome to Usmon\'s Portfolio Terminal!' },
        { type: 'output', content: 'Type "help" to see available commands.' },
        { type: 'output', content: '' }
      ]);
    }
  }, [isOpen]);

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    const trimmedCommand = command.trim().toLowerCase();
    const newOutput = { type: 'command' as const, content: `$ ${command}` };
    
    setOutputHistory(prev => [...prev, newOutput]);

    // Simulate typing delay for realistic feel
    setIsTyping(true);
    setTimeout(() => {
      let response = '';
      
      if (trimmedCommand === 'clear') {
        setOutputHistory([]);
        setIsTyping(false);
        return;
      }

      if (commands[trimmedCommand as keyof typeof commands]) {
        response = commands[trimmedCommand as keyof typeof commands];
      } else {
        response = `Command not found: ${trimmedCommand}. Type "help" for available commands.`;
      }

      setOutputHistory(prev => [...prev, { type: 'output', content: response }]);
      setIsTyping(false);
    }, 300);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          ref={terminalRef}
          className="w-full max-w-4xl h-96 bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm font-mono">
              Terminal — Portfolio
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Terminal Content */}
          <div className="p-4 h-full overflow-y-auto font-mono text-sm">
            {/* Output History */}
            {outputHistory.map((output, index) => (
              <div key={index} className="mb-2">
                {output.type === 'command' && (
                  <div className="text-green-400">{output.content}</div>
                )}
                {output.type === 'output' && (
                  <div className="text-gray-300 whitespace-pre-line">{output.content}</div>
                )}
                {output.type === 'error' && (
                  <div className="text-red-400">{output.content}</div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="text-gray-400">
                <span className="animate-pulse">█</span>
              </div>
            )}

            {/* Current input line */}
            <div className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent text-gray-300 outline-none"
                placeholder="Type a command..."
                autoFocus
              />
              <span className="text-gray-400 ml-1 animate-pulse">█</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Terminal;
