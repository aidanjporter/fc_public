// Log messages for debugging
console.log("This is my test CDN");

// Function to create a loading message
function createLoadingMessage() {
    const loadingMessage = document.createElement('div');
    loadingMessage.innerHTML = "Loading, 1000ms delay applied...";
    loadingMessage.classList.add('animate-pulse', 'italic', 'text-gray-600', 'mb-2');
    return loadingMessage;
}

// Function to fetch content from a specified file
async function fetchContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.text();
    } catch (error) {
        console.error('Error loading the content:', error);
        return null; // Return null in case of error
    }
}

// Function to insert fetched content after the specified element
function insertContentAfter(element, content) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    element.insertAdjacentElement('afterend', tempDiv);
}

// Main function to handle the content injection
async function injectContent() {
    const h2Element = document.querySelector("#inject-here h2");

    // Create and display the loading message
    const loadingMessage = createLoadingMessage();
    h2Element.insertAdjacentElement('afterend', loadingMessage);

    const content = await fetchContent('content.html');
    if (content) {
        // Delay the insertion of the fetched content
        setTimeout(() => {
            insertContentAfter(h2Element, content);
            loadingMessage.remove(); // Remove loading message
        }, 1000); // content loading delay in ms
    } else {
        loadingMessage.textContent = "Failed to load content."; // Handle error
    }
}

// Run the injectContent function on DOM content loaded
document.addEventListener("DOMContentLoaded", injectContent);
