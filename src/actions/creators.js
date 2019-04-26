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

function getUsersThunk(value) {
    return function( dispatch ) {
        dispatch( getUsers(value) );

        GitService.getUsers(value)
            .then( users => dispatch( getUsersSuccess( users ) ) )
            .catch( error => dispatch( getUsersFailure( error ) ) );
    }
}
function getUsersSearch(value){
    return function (dispatch){
        dispatch (getUsers(value));
        GitService.getUsersSearch(value)
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
    console.log('user',users)
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
    getUsersDetailsThunk,
    getUsersSearch

};