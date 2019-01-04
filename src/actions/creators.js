import * as Constants from './constants';
import * as GitService from '../services/git';

function getUsers( page ) {
    return {
        type: Constants.USERS,
        payload:{
            page:page
        }
    }
}

function getUsersSuccess( users ) {
    return {
        type: Constants.USERS_SUCCESS,
        payload: {
            users: users
        }
    }
}

function getUsersFailure( error ) {
    return {
        type: Constants.USERS_FAILURE,
        payload: {
            error: error
        }
    };
}

function getUsersThunk(page) {
    return function( dispatch ) {
        dispatch( getUsers(page) );

        GitService.getUsers(page)
            .then( users => dispatch( getUsersSuccess( users ) ) )
            .catch( error => dispatch( getUsersFailure( error ) ) );
    }
}


function getUsersDetails(  id  ) {
    return {
        type: Constants.USERS_DETAILS,
        payload: {
            userId: id
        }
    }
}

function getUsersDetailsSuccess( users ) {
    return {
        type: Constants.USERS_DETAILS_SUCCESS,
        payload: {
            users: users
        }
    }
}

function getUsersDetailsFailure( error ) {
    return {
        type: Constants.USERS_DETAILS_FAILURE,
        payload: {
            error: error
        }
    };
}

function getUsersDetailsThunk( id ) {
    return function( dispatch ) {
        dispatch( getUsersDetails( id ) );

        GitService.getUsersDetails( id )
            .then( user => dispatch( getUsersDetailsSuccess( user ) ) )
            .catch( error => dispatch( getUsersDetailsFailure( error ) ) );
    }
}




export {
    getUsers,
    getUsersSuccess,
    getUsersFailure,
    getUsersThunk,
    getUsersDetails,
    getUsersDetailsSuccess,
    getUsersDetailsFailure,
    getUsersDetailsThunk

};