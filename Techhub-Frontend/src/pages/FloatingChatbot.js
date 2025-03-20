import React, { useState } from "react";

const FloatingChatbot = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {/* Floating Icon */}
      {!showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#007bff", // Blue color for floating button
            color: "#fff",
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
            transition: "all 0.3s ease-in-out",
            fontSize: "28px",
          }}
          onClick={() => setShowChat(true)}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          💬
        </div>
      )}

      {/* Chatbox */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "350px",
            height: "450px", // Adjusted height
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            zIndex: "1000",
            display: "flex",
            flexDirection: "column",
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#007bff", // Blue header
              color: "#fff",
              padding: "15px",
              borderRadius: "15px 15px 0 0",
              fontSize: "18px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Chat with TechHub
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={() => setShowChat(false)}
            >
              ✖
            </button>
          </div>

          {/* Chat Content */}
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/11/29/17/20241129171727-6K6D3DG0.json" // Replace with your chatbot URL
            title="Botpress Webchat"
            style={{
              flex: 1,
              border: "none",
              borderRadius: "0 0 15px 15px",
            }}
          ></iframe>
        </div>
      )}

      {/* Add Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingChatbot;
