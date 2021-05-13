import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    collections: collectionsReducer,
    plants: plantsReducer,
    lights: lightsReducer,
    waters: watersReducer
});

export default rootReducer;


function collectionsReducer(state = [], action) {
//    let idx;
    switch(action.type) {
        // case "ADD_COLLECTION":
        //     return [...state, action.collection];

        // case "REMOVE_COLLECTION":
        //     idx = state.findIndex(collection => collection.id === action.id)
        //     return [...state.slice(0, idx), ...state.slice(idx+1)];

        default:
            return state;
    }
}

function plantsReducer(state = [], action) {
    
   switch(action.type) {
        case "FETCH_PLANTS":
            return action.payload;

        case "ADD_PLANT":
            return [...state, action.payload];

        case "EDIT_PLANT":
            const plants = state.filter(p => p.id !== action.payload.id);
            return [...plants, action.payload];

        case "DELETE_PLANT":
            const remainedPlants = state.filter(p => p.id !== action.payload);
            return [...remainedPlants];

        default:
            return state;
    }

}

function lightsReducer(state = [], action) {
    switch(action.type) {
         case "FETCH_LIGHTS":
             return action.payload;
             
         default:
             return state;
     }
 
 }

 function watersReducer(state = [], action) {
    switch(action.type) {
         case "FETCH_WATERS":
             return action.payload;
             
         default:
             return state;
     }
 
 }