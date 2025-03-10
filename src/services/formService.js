export const submitForm = async (formData) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Failed to submit form');
        }
        return await response.json();
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};

export const fetchItems = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
};