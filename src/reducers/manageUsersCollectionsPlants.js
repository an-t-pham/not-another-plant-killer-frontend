import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    users: usersReducer,
    collections: collectionsReducer,
    plants: plantsReducer
});

export default rootReducer;

function usersReducer(state = [], action) {
    switch(action.type) {
        case "ADD_USER":
            return [...state, action.user];
        default:
            return state;
    }
}

function collectionsReducer(state = [], action) {
   let idx;
    switch(action.type) {
        case "ADD_COLLECTION":
            return [...state, action.collection];

        case "REMOVE_COLLECTION":
            idx = state.findIndex(collection => collection.id === action.id)
            return [...state.slice(0, idx), ...state.slice(idx+1)];

        default:
            return state;
    }
}

function plantsReducer(state = [], action) {
    switch(action.type) {
        case "ADD_PLANT":
            return [...state, action.plant];

        default:
            return state;
    }

}