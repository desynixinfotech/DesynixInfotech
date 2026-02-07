const API_URL = 'http://localhost:5000/api';

export const submitContactForm = async (data) => {
    try {
        const response = await fetch(`${API_URL}/contact/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
};

export const submitProjectEnquiry = async (data) => {
    try {
        const response = await fetch(`${API_URL}/contact/enquire`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error('Error submitting enquiry:', error);
        throw error;
    }
};

export const getProjects = async () => {
    try {
        const response = await fetch(`${API_URL}/projects`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};
