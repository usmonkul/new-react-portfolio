import React, { useState } from 'react';
import SpotlightEffect from './SpotlightEffect';

const SpotlightDemo: React.FC = () => {
  const [config, setConfig] = useState({
    size: 800,
    opacity: 0.08,
    blur: 0,
    enabled: true
  });

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Spotlight Effect Demo</h2>
      
      {/* Controls */}
      <div className="space-y-4 p-4 bg-gray-100 rounded-lg">
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={config.enabled}
              onChange={(e) => setConfig(prev => ({ ...prev, enabled: e.target.checked }))}
              className="mr-2"
            />
            Enable Spotlight
          </label>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Size (px)</label>
            <input
              type="range"
              min="200"
              max="1200"
              value={config.size}
              onChange={(e) => setConfig(prev => ({ ...prev, size: parseInt(e.target.value) }))}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{config.size}px</span>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Opacity</label>
            <input
              type="range"
              min="0.01"
              max="0.2"
              step="0.01"
              value={config.opacity}
              onChange={(e) => setConfig(prev => ({ ...prev, opacity: parseFloat(e.target.value) }))}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{config.opacity}</span>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Blur (px)</label>
            <input
              type="range"
              min="0"
              max="10"
              value={config.blur}
              onChange={(e) => setConfig(prev => ({ ...prev, blur: parseInt(e.target.value) }))}
              className="w-full"
            />
            <span className="text-sm text-gray-600">{config.blur}px</span>
          </div>
        </div>
      </div>

      {/* Spotlight Demo Area */}
      <SpotlightEffect {...config}>
        <div className="min-h-[400px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
          <h3 className="text-xl font-semibold mb-4">Move your mouse around this area!</h3>
          <p className="text-blue-100">
            The spotlight effect will follow your cursor with the current settings.
            Try adjusting the controls above to see different effects.
          </p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="bg-white bg-opacity-20 rounded-lg p-4 text-center backdrop-blur-sm"
              >
                <div className="text-2xl mb-2">✨</div>
                <div className="text-sm">Item {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </SpotlightEffect>
    </div>
  );
};

export default SpotlightDemo;
