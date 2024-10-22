// // Test 1 - Console and document write
// console.log("This is my test cdn");
// document.write("Hey, this is my test cdn file, tada");

// // Test 2 - Injecting code
// document.addEventListener("DOMContentLoaded", function() {
//     // Select the h2 element within the #inject-here section
//     const h2Element = document.querySelector("#inject-here h2");

//     // Create a new div element
//     const newDiv = document.createElement("div");
//     newDiv.textContent = "This is a new div block added after the h2.";
//     newDiv.style.border = "1px solid #000"; // Optional: add some styling

//     // Insert the new div after the h2 element
//     h2Element.insertAdjacentElement('afterend', newDiv);
// });

// // Test 3 - Pulling content from a file
// document.addEventListener("DOMContentLoaded", function() {
//     // Select the h2 element within the #inject-here section
//     const h2Element = document.querySelector("#inject-here h2");

//     // Fetch the content from the content.html file
//     fetch('content.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             // Create a temporary container to hold the HTML
//             const tempDiv = document.createElement('div');
//             tempDiv.innerHTML = data;

//             // Insert the fetched content after the h2 element
//             h2Element.insertAdjacentElement('afterend', tempDiv.firstChild);
//         })
//         .catch(error => {
//             console.error('Error loading the content:', error);
//         });
// });

// // Test 4 - Pulling content from a file with loading

// document.addEventListener("DOMContentLoaded", function() {
//     const h2Element = document.querySelector("#inject-here h2");

//     const loadingMessage = document.createElement('div');
//     loadingMessage.textContent = "Loading content...";
//     loadingMessage.style.fontStyle = "italic";
//     loadingMessage.style.color = "#888"; // Optional styling
//     loadingMessage.style.marginTop = "10px";

//     h2Element.insertAdjacentElement('afterend', loadingMessage);

//     fetch('content.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text();
//         })
//         .then(data => {
//             // Create a temporary container to hold the HTML
//             const tempDiv = document.createElement('div');
//             tempDiv.innerHTML = data;

//             // Delay the insertion of the fetched content
//             setTimeout(() => {
//                 // Insert the entire fetched content after the h2 element
//                 h2Element.insertAdjacentElement('afterend', tempDiv);
//                 loadingMessage.remove(); // Remove loading message
//             }, 300); // 300ms delay
//         })
//         .catch(error => {
//             console.error('Error loading the content:', error);
//             loadingMessage.textContent = "Failed to load content.";
//         });
// });


// Test 5 - Optimized content pull with loading

// Log messages for debugging
console.log("This is my test CDN");

// Function to create a loading message
function createLoadingMessage() {
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = "Loading content...";
    loadingMessage.style.fontStyle = "italic";
    loadingMessage.style.color = "#888"; // Optional styling
    loadingMessage.style.marginTop = "10px";
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
        }, 300); // 300ms delay
    } else {
        loadingMessage.textContent = "Failed to load content."; // Handle error
    }
}

// Run the injectContent function on DOM content loaded
document.addEventListener("DOMContentLoaded", injectContent);
