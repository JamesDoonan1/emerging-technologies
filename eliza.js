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

        // --- Greeting Patterns ---
        { pattern: /hello|hi|hey/i, response: ["Hello! How are you feeling today?", "Hi there! What’s on your mind?", "Hey! How can I help you?"] },
        { pattern: /good (morning|afternoon|evening)/i, response: ["Good $1! How can I assist you today?", "Good $1! What’s on your mind?", "Hello! I hope you're having a pleasant $1."] },
    
        // --- Emotion-based Responses ---
        { pattern: /I feel (happy|excited|joyful)/i, response: ["I'm glad to hear that you're feeling $1! What made you feel this way?", "It’s wonderful to feel $1! Would you like to talk more about it?"] },
        { pattern: /I feel (sad|down|upset|frustrated|angry)/i, response: ["I'm sorry you're feeling $1. Would you like to discuss what’s causing it?", "Feeling $1 can be tough. Do you want to share more?"] },
    
        // --- Identity or Purpose Questions ---
        { pattern: /who are you|what are you/i, response: ["I'm ELIZA, a virtual therapist. How can I support you today?", "I'm here to listen and help you talk through things."] },
        { pattern: /what do you do/i, response: ["I’m here to listen and have conversations to help you explore your thoughts."] },
    
        // --- Farewell Responses ---
        { pattern: /goodbye|bye|see you/i, response: ["Goodbye! Take care.", "Thank you for sharing. Goodbye!", "Bye! I’m here if you need to talk again."] },
    
        // --- Advice or Guidance Requests ---
        { pattern: /what should I do/i, response: ["Sometimes talking things through helps. What’s on your mind?", "What do you feel would help you most?", "Have you considered what outcome you'd like to see?"] },
    
        // --- General Existing Patterns ---
        { pattern: /I need (.*)/i, response: ["Why do you need $1?", "Would it really help you to get $1?", "Are you sure you need $1?"] },
        { pattern: /Why don\'?t you ([^\?]*)\??/i, response: ["Do you really think I don't $1?", "Perhaps eventually I will $1.", "Do you want me to $1?"] },
        { pattern: /Why can\'?t I ([^\?]*)\??/i, response: ["Do you think you should be able to $1?", "If you could $1, what would you do?", "I don't know -- why can't you $1?"] },
        { pattern: /I can\'?t (.*)/i, response: ["How do you know you can't $1?", "Perhaps you could $1 if you tried.", "What would it take for you to $1?"] },
        { pattern: /I am (.*)/i, response: ["How long have you been $1?", "Do you believe it is normal to be $1?", "How does being $1 make you feel?"] },
        { pattern: /I\'?m (.*)/i, response: ["How does being $1 make you feel?", "Do you enjoy being $1?", "Why do you tell me you're $1?"] },
        { pattern: /Are you ([^\?]*)\??/i, response: ["Why does it matter whether I am $1?", "Would you prefer it if I were not $1?", "Perhaps you believe I am $1."] },
        { pattern: /What (.*)/i, response: ["Why do you ask?", "How would an answer to that help you?", "What do you think?"] },
        { pattern: /How (.*)/i, response: ["How do you suppose?", "Perhaps you can answer your own question.", "What is it you're really asking?"] },
        { pattern: /Because (.*)/i, response: ["Is that the real reason?", "What other reasons come to mind?", "Does that reason seem to explain anything else?"] },
        { pattern: /(.*) sorry (.*)/i, response: ["There are many times when no apology is needed.", "What feelings do you have when you apologize?", "Don't be sorry."] },
        { pattern: /I think (.*)/i, response: ["Do you doubt $1?", "Do you really think so?", "But you're not sure $1?"] },
        { pattern: /Friend (.*)/i, response: ["Tell me more about your friends.", "When you think of a friend, what comes to mind?", "Why don't you tell me about a childhood friend?"] },
        { pattern: /Yes/i, response: ["You seem quite sure.", "OK, but can you elaborate a bit?", "Why do you say yes?"] },
        { pattern: /No/i, response: ["Why not?", "Are you saying no just to be negative?", "Does no mean the same thing to you as it does to me?"] },
        { pattern: /I am glad (.*)/i, response: ["What makes you happy $1?", "How have I helped you to be $1?", "What makes you feel $1 just now?"] },
        { pattern: /I am sad (.*)/i, response: ["I'm sorry to hear that you are sad $1.", "Do you think coming here will help you not to be sad $1?", "I'm sure it's not pleasant to be sad $1."] },
        { pattern: /Can you ([^\?]*)\??/i, response: ["What makes you think I can't $1?", "If I could $1, then what?", "Why do you ask if I can $1?"] },
        { pattern: /Can I ([^\?]*)\??/i, response: ["Perhaps you don't want to $1.", "Do you want to be able to $1?", "If you could $1, would you?"] },
        { pattern: /You are (.*)/i, response: ["Why do you think I am $1?", "Does it please you to believe I am $1?", "Perhaps you would like me to be $1."] },
        { pattern: /You\'?re (.*)/i, response: ["Why do you say I am $1?", "Why do you think I am $1?", "Are you sure I am $1?"] },
        { pattern: /I don\'?t (.*)/i, response: ["Why don't you $1?", "Do you wish to be able to $1?", "Does that trouble you?"] },
        { pattern: /I feel (.*)/i, response: ["Tell me more about feeling $1.", "Do you often feel $1?", "When do you usually feel $1?"] },
        { pattern: /I have (.*)/i, response: ["Why do you tell me that you've $1?", "Have you really $1?", "Now that you have $1, what will you do next?"] },
        { pattern: /I would (.*)/i, response: ["Why would you $1?", "Could you explain why you would $1?", "Why do you think you would $1?"] },
        { pattern: /Is there (.*)/i, response: ["Do you think there is $1?", "It's likely that there is $1.", "Would you like there to be $1?"] },
        { pattern: /My (.*)/i, response: ["I see, your $1.", "Why do you say that your $1?", "When your $1, how do you feel?"] },
        { pattern: /You (.*)/i, response: ["We should be discussing you, not me.", "Why do you say that about me?", "Let's talk more about you."] },
        { pattern: /Why (.*)/i, response: ["Why don't you tell me the reason why $1?", "Why do you think $1?", "What do you think is the reason?"] },
        { pattern: /I want (.*)/i, response: ["What would it mean if you got $1?", "Why do you want $1?", "Suppose you got $1 soon."] },
        { pattern: /(.*) mother(.*)/i, response: ["Tell me more about your mother.", "What was your relationship with your mother like?", "How do you feel about your mother?"] },
        { pattern: /(.*) father(.*)/i, response: ["Tell me more about your father.", "How did your father make you feel?", "What are your feelings towards your father?"] },
        { pattern: /(.*) child(.*)/i, response: ["Did you have close friends as a child?", "What is your favorite childhood memory?", "Do you remember any dreams or nightmares from childhood?"] },
        { pattern: /quit/i, response: ["Thank you for talking with me.", "Goodbye. It was nice talking to you.", "Have a great day!"] },
        { pattern: /(.*)/i, response: ["Please tell me more.", "Let's change focus a bit... Tell me about your family.", "Can you elaborate on that?"] }
    ];
    

    // Function to get a random response from the array of responses
    function getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    function elizaResponse(userMessage) {
        const message = userMessage.toLowerCase();
        for (const pattern of patterns) {
            const match = message.match(pattern.pattern);
            if (match) {
                const response = getRandomResponse(pattern.response);
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
