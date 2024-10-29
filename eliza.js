document.addEventListener("DOMContentLoaded", function () {
    const chatArea = document.getElementById("chat-area");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Function to append messages to the chat area
    function appendMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = text;
        chatArea.appendChild(messageDiv);
        chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the latest message
    }

    // Placeholder function for ELIZA's response logic
    function elizaResponse(userMessage) {
        return "This is ELIZA's response."; // You’ll implement this function later
    }

    // Event listener for the Send button
    sendBtn.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage("user", userMessage);  // Show user's message
            const botReply = elizaResponse(userMessage);  // Get ELIZA's reply
            appendMessage("bot", botReply);  // Show ELIZA's message
            userInput.value = "";  // Clear the input field
        }
    });
});
