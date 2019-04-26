import { USERS_DETAILS, USERS_DETAILS_SUCCESS,  USERS_DETAILS_FAILURE } from '../actions/constants';

export const usersDetailReducer = ( curState = 
    {   usersId:    null, users: {}, isLoading: false, error: null }, action ) => {
    let newState;

    console.log(action.type,'action came here');
    switch( action.type ) {
          
        case USERS_DETAILS:
            newState = { ...curState, error: null, isLoading: USERS_DETAILS, usersId: action.payload.id };
            break;
        case USERS_DETAILS_SUCCESS:
            newState = { ...curState, isLoading: USERS_DETAILS_SUCCESS, users: action.payload.users };
            break;
        case USERS_DETAILS_FAILURE:
            newState = { ...curState, isLoading: USERS_DETAILS_FAILURE, users: {}, error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    return newState;
}