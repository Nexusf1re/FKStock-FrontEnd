export const fetchItemById = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch item');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching item:', error);
        throw error;
    }
};

export const updateItem = async (id, itemData) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemData),
        });
        if (!response.ok) {
            throw new Error('Failed to update item');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
};

export const deleteItem = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete item');
        }
        return true;
    } catch (error) {
        console.error('Error deleting item:', error);
        throw error;
    }
};