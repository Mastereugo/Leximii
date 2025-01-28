document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.querySelector(".chat-window");
    const chatInput = document.querySelector(".chat-input input");
    const sendButton = document.querySelector(".chat-input button");

    chatInput.removeAttribute("disabled");
    sendButton.removeAttribute("disabled");

    const showTypingDots = () => {
        const typingElement = document.createElement("div");
        typingElement.className = "typing-dots";
        typingElement.innerHTML = "<span>.</span><span>.</span><span>.</span>";
        chatWindow.appendChild(typingElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        return typingElement;
    };

    const removeTypingDots = (element) => {
        if (element) {
            chatWindow.removeChild(element);
        }
    };

    sendButton.addEventListener("click", () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            // Display user's message
            const userMessageElement = document.createElement("div");
            userMessageElement.className = "user-message message";
            userMessageElement.textContent = userMessage;
            chatWindow.appendChild(userMessageElement);

            chatWindow.scrollTop = chatWindow.scrollHeight;
            chatInput.value = "";

            // Show typing dots for 2 seconds
            const typingElement = showTypingDots();

            setTimeout(() => {
                removeTypingDots(typingElement);

                // Display bot's message
                const botMessageElement = document.createElement("div");
                botMessageElement.className = "bot-message message";
                botMessageElement.textContent =
                    "Sorry! Chatbot is ongoing improvement.";
                chatWindow.appendChild(botMessageElement);

                chatWindow.scrollTop = chatWindow.scrollHeight;
            }, 1200);
        }
    });

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });
});
