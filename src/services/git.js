import axios from 'axios';
import { getAuthToken } from './auth';
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
const baseUrl = `http://apiproxy.nl-demo.com/github/users`;
const searchUrl = `http://apiproxy.nl-demo.com/github/users`;
// const repoUrl   =   `http://apiproxy.nl-demo.com/github/users/`

const axiosOptions = {
    timeout: 10000
};

const getAxiosAuthenticatedEnpointOptions = () => ({
    ...axiosOptions, headers: {
        'x-nl-auth': getAuthToken()
    }
});

export function getUsers() {
    return axios.get( baseUrl, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data )
};

export function getUsersDetails( id ) {
    return axios.get( `${searchUrl}/${id}`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data );
}

export function getUsersRepo( id ) {
    return axios.get( `${baseUrl}/${id}/repos`, getAxiosAuthenticatedEnpointOptions() )
        .then( response => response.data );
}
