// Step 1: Define the function to fetch data from an API
async function fetchData(apiUrl) {
    try {
        // Step 2: Use fetch to get data from the API
        const response = await fetch(apiUrl);
        
        // Step 3: Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Step 4: Parse the JSON data from the response
        const data = await response.json();
        
        // Step 5: Process the data to filter out certain items
        // For example, filter out items with a specific condition
        const filteredData = data.filter(item => item.isActive);
        
        // Step 6: Display the results
        console.log('Filtered Data:', filteredData);
    } catch (error) {
        // Step 7: Handle any errors that occur during the fetch
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Example usage of the fetchData function
const apiUrl = 'https://api.example.com/data';
fetchData(apiUrl);