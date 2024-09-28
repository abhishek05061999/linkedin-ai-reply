// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const messageInputSelector = 'input[aria-label="Write a message…"]'; // Adjust this selector as needed for LinkedIn's input
    let messageInput = document.querySelector(messageInputSelector);

    // Check if the message input field exists
    if (messageInput) {
        messageInput.addEventListener('focus', function () {
            showAIIcon();
        });

        messageInput.addEventListener('blur', function () {
            hideAIIcon();
        });
    }
});

// Function to show the AI icon
function showAIIcon() {
    const aiIcon = document.createElement('img');
    aiIcon.src = chrome.runtime.getURL('ai-icon.png'); // Replace with your AI icon path
    aiIcon.id = 'ai-icon';
    aiIcon.style.position = 'absolute';
    aiIcon.style.cursor = 'pointer';
    aiIcon.style.width = '30px';
    aiIcon.style.height = '30px';
    // Position near the input field
    const inputField = document.querySelector('input[aria-label="Write a message…"]');
    const rect = inputField.getBoundingClientRect();
    aiIcon.style.top = `${rect.top - 40}px`;
    aiIcon.style.left = `${rect.left + rect.width - 40}px`;
    document.body.appendChild(aiIcon);

    // Add click event to open the modal
    aiIcon.addEventListener('click', function () {
        openModal();
    });
}

// Function to hide the AI icon
function hideAIIcon() {
    const aiIcon = document.getElementById('ai-icon');
    if (aiIcon) {
        aiIcon.remove();
    }
}

// Function to open the modal
function openModal() {
    // Create the modal
    const modal = document.createElement('div');
    modal.id = 'ai-modal';
    modal.style.position = 'fixed';
    modal.style.left = '50%';
    modal.style.top = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '20px';
    modal.style.backgroundColor = 'white';
    modal.style.border = '1px solid black';
    modal.style.zIndex = '1000';

    // Create the input field
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Enter your command...';
    inputField.style.width = '100%';
    inputField.style.marginBottom = '10px';
    modal.appendChild(inputField);

    // Create the Generate button
    const generateButton = document.createElement('button');
    generateButton.innerText = 'Generate';
    modal.appendChild(generateButton);

    // Close the modal on clicking outside
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.body.appendChild(modal);

    // Handle click on the Generate button
    generateButton.addEventListener('click', function () {
        generateReply(inputField);
    });
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('ai-modal');
    if (modal) {
        modal.remove();
    }
}

// Function to generate a dummy reply
function generateReply(inputField) {
    const message = 'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.';
    
    // Insert the message back into the LinkedIn message input field
    const linkedinInput = document.querySelector('input[aria-label="Write a message…"]');
    if (linkedinInput) {
        linkedinInput.value = message; // Insert the dummy response
    }

    // Close the modal
    closeModal();
}
