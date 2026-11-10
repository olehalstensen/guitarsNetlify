import { randomUUID } from 'node:crypto';
import * as guitars from '../guitarData.js';

console.log(guitars);

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
        
        const bodi = JSON.parse(body);
        const id = bodi.id
        const guitarIndex = guitars.findIndex((guitar) => guitar.id === id);
        const deletedGuitar = guitars.splice(guitarIndex, 1)

        return {
            statusCode: 201,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deletedGuitar)
        };
    }

    return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
    };
};

//49091710-ad1c-4584-91d2-9c6384700dff