import React, { useState } from 'react';

const App: React.FC = () => {
  const [command, setCommand] = useState('');
  const [generatedResponse, setGeneratedResponse] = useState('');

  const handleGenerate = () => {
    // Dummy response
    setGeneratedResponse("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-xl font-bold mb-4">AI Reply Generator</h1>
      <input
        type="text"
        placeholder="Enter your command..."
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="p-2 border border-gray-400 mb-4"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate
      </button>

      {generatedResponse && (
        <div className="mt-4 p-2 border border-gray-400">{generatedResponse}</div>
      )}
    </div>
  );
};

export default App;
