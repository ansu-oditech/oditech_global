import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-20 h-20 bg-white rounded-full shadow-lg border
                     z-50 overflow-hidden hover:scale-110 transition-transform animate-bounce-slow"
        >
          <video
            src="./chatbot.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-full"
          />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 w-80 h-[480px] bg-white rounded-lg shadow-lg border flex flex-col z-50 overflow-hidden animate-fade-in-up"
        >
          {/* Header */}
          <div className="bg-yellow-500 text-white p-3 flex justify-between items-center rounded-t-lg">
            <span className="font-semibold">Oditech Assistant 🤖</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              ✖
            </button>
          </div>

          {/* Embedded Botpress Chat */}
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/10/18/11/20251018115700-MFTD18DA.json"
            title="Oditech Assistant"
            className="flex-1 w-full border-none"
            allow="microphone; camera"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
