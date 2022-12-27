import { isValidEmailAddr } from "../lib/validation.js";

const BASE_URL = 'https://api.itaxeasy.com';

const AUTH_API_URL = `${BASE_URL}/users/login`;

export async function signIn(data) {
    const email = data.get('email').trim();
    const password = data.get('password').trim();

    if(!email || !password) {
        throw new Error('Email and Password cannot be empty.');
    }

    if(!isValidEmailAddr(email)) {
        throw new Error('Email address is not valid.');
    }

    const formData = new FormData();

    formData.set('email', email);
    formData.set('password', password);

    const response = await fetch(
        AUTH_API_URL, 
        {
            method: 'POST',
            body: formData,
        }
    );

    const { status, results, message, ...rest } = await response.json();
    if(status === 'failed') {
        throw new Error(message);
    }

    return results;
};