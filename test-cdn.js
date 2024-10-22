// Test 1 - Console and document write
console.log("This is my test cdn");
document.write("Hey, this is my test cdn file, tada");

// Test 2 - Injecting code
document.addEventListener("DOMContentLoaded", function() {
    // Select the h2 element within the #inject-here section
    const h2Element = document.querySelector("#inject-here h2");

    // Create a new div element
    const newDiv = document.createElement("div");
    newDiv.textContent = "This is a new div block added after the h2.";
    newDiv.style.border = "1px solid #000"; // Optional: add some styling

    // Insert the new div after the h2 element
    h2Element.insertAdjacentElement('afterend', newDiv);
});

// Test 3 - Pulling content from a file
document.addEventListener("DOMContentLoaded", function() {
    // Select the h2 element within the #inject-here section
    const h2Element = document.querySelector("#inject-here h2");

    // Fetch the content from the content.html file
    fetch('content.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Create a temporary container to hold the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Insert the fetched content after the h2 element
            h2Element.insertAdjacentElement('afterend', tempDiv.firstChild);
        })
        .catch(error => {
            console.error('Error loading the content:', error);
        });
});
