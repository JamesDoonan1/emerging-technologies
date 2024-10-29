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

    const reflections = {
        "I": "you",
        "me": "you",
        "my": "your",
        "am": "are",
        "you": "I",
        "your": "my",
        "yours": "mine",
        "are": "am"
    };

    // Function to replace pronouns in the user's message - Generated using CoPilot
    const patterns = [
        { pattern: /I need (.*)/i, response: "Why do you need $1?" },
        { pattern: /Why don\'?t you ([^\?]*)\??/i, response: "Do you really think I don't $1?" },
        { pattern: /Why can\'?t I ([^\?]*)\??/i, response: "Do you think you should be able to $1?" },
        { pattern: /I can\'?t (.*)/i, response: "How do you know you can't $1?" },
        { pattern: /I am (.*)/i, response: "How long have you been $1?" },
        { pattern: /I\'?m (.*)/i, response: "How does being $1 make you feel?" },
        { pattern: /Are you ([^\?]*)\??/i, response: "Why does it matter whether I am $1?" },
        { pattern: /What (.*)/i, response: "Why do you ask?" },
        { pattern: /How (.*)/i, response: "How do you suppose?" },
        { pattern: /Because (.*)/i, response: "Is that the real reason?" },
        { pattern: /(.*) sorry (.*)/i, response: "There are many times when no apology is needed." },
        { pattern: /Hello(.*)/i, response: "Hello... I'm glad you could drop by today." },
        { pattern: /I think (.*)/i, response: "Do you doubt $1?" },
        { pattern: /Friend (.*)/i, response: "Tell me more about your friends." },
        { pattern: /Yes/i, response: "You seem quite sure." },
        { pattern: /No/i, response: "Why not?" },
        { pattern: /I am glad (.*)/i, response: "What makes you happy $1?" },
        { pattern: /I am sad (.*)/i, response: "I'm sorry to hear that you are sad $1." },
        { pattern: /Can you ([^\?]*)\??/i, response: "What makes you think I can't $1?" },
        { pattern: /Can I ([^\?]*)\??/i, response: "Perhaps you don't want to $1." },
        { pattern: /You are (.*)/i, response: "Why do you think I am $1?" },
        { pattern: /You\'?re (.*)/i, response: "Why do you say I am $1?" },
        { pattern: /I don\'?t (.*)/i, response: "Why don't you $1?" },
        { pattern: /I feel (.*)/i, response: "Tell me more about feeling $1." },
        { pattern: /I have (.*)/i, response: "Why do you tell me that you've $1?" },
        { pattern: /I would (.*)/i, response: "Why would you $1?" },
        { pattern: /Is there (.*)/i, response: "Do you think there is $1?" },
        { pattern: /My (.*)/i, response: "I see, your $1." },
        { pattern: /You (.*)/i, response: "We should be discussing you, not me." },
        { pattern: /Why (.*)/i, response: "Why don't you tell me the reason why $1?" },
        { pattern: /I want (.*)/i, response: "What would it mean if you got $1?" },
        { pattern: /(.*) mother(.*)/i, response: "Tell me more about your mother." },
        { pattern: /(.*) father(.*)/i, response: "Tell me more about your father." },
        { pattern: /(.*) child(.*)/i, response: "Did you have close friends as a child?" },
        { pattern: /quit/i, response: "Thank you for talking with me." },
        { pattern: /(.*)/i, response: "Please tell me more." }
    ];

    // Function to reflect pronouns
    function reflect(text) {
        return text.split(" ").map(word => reflections[word] || word).join(" ");
    }

    function elizaResponse(userMessage) {
        const message = userMessage.toLowerCase();
        for (const pattern of patterns) {
            const match = message.match(pattern.pattern);
            if (match) {
                const response = pattern.response;
                return response.replace(/\$(\d+)/g, function (_, index) {
                    return reflect(match[index]) || match[index];
                });
            }
        }
        // Default response if no patterns match
        return "I'm not sure I understand. Can you elaborate?";

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
