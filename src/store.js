import { createStore, combineReducers, applyMiddleware } from 'redux';
import { usersDetailReducer} from './reducers/user-details-reducer'
import  { userslistReducer } from   './reducers/user-list-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// create store
export const store = createStore(
    combineReducers({
        usersDetail :   usersDetailReducer,
        usersList   :   userslistReducer,
        
    }),
    {
        usersDetail :   {   usersId:    null, users: {}, isLoading: false, error: null },
        usersList   :   {   users: [], isLoading: false, error: null },
       
    },
    composeWithDevTools( applyMiddleware( logger, thunk ) )
);