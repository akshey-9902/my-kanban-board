// src/utils/api.js
export async function fetchTickets() {
    try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch tickets:", error);
        return { tickets: [], users: [] }; // Return empty structure on error
    }
}
