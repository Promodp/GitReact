import axios from 'axios';

const baseUrl = `http://apiproxy.nl-demo.com/login/api`;
const loginUrl = `${baseUrl}/login`;

const axiosOptions = {
    timeout: 10000
};

export let isLoggedIn = localStorage.getItem( 'authToken' );
export function login( credentials ) {
    return axios.post( loginUrl, credentials, {
        ...axiosOptions,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( response => {
        
        if( response.data ) {
            
            localStorage.setItem( 'authToken', response.data.data.token );
          
            isLoggedIn = true;
            return response.data;
        } else {
            return new Error( 'Credentials incorrect' );
        }
    })
}

export function logout() {
    localStorage.removeItem( 'authToken' );
    isLoggedIn = false;
}

export function getAuthToken() {
    return localStorage.getItem( 'authToken' );
}