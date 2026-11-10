import { randomUUID } from 'node:crypto';
import guitars from '../guitarData.js';

export const handler = async (event) => {
    const { httpMethod, body } = event;

    if (httpMethod === 'GET') {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guitars)
        };
    }

    if (httpMethod === 'POST') {
        const newGuitar = JSON.parse(body);
        newGuitar.id = randomUUID();
        guitars.push(newGuitar);

        return {
            statusCode: 201,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newGuitar)
        };
    }

    if (httpMethod === 'DELETE') {
        const { id } = body;
        
        const guitarIndex = guitars.findIndex((guitar) => guitar.id === id);
        guitars.slice(guitarIndex, (guitarIndex + 1))

        return {
            statusCode: 201,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newGuitar)
        };
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
    };
};

//49091710-ad1c-4584-91d2-9c6384700dff