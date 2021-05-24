import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user: usersReducer,
    collections: collectionsReducer,
    plants: plantsReducer,
    lights: lightsReducer,
    waters: watersReducer
});

export default rootReducer;

function usersReducer(state = null, action) {

    switch(action.type) {
         case "FETCH_USER":
             return action.payload;
             
         default:
             return state;
     }
 
 }
function collectionsReducer(state = [], action) {
    switch(action.type) {
        case "FETCH_COLLECTIONS":
            return action.payload

        case "ADD_COLLECTION":
            return [...state, action.payload];

        // case "DELETE_PLANT_FROM_COLLECTION":
        //     const theCollections = state.map(c => c.plants.filter(p => p.id !== action.payload))
        //     return [...theCollections];
        case "EDIT_COLLECTION":
            const editedCollections = state.filter(c => c.id !== action.payload.id)
            return [...editedCollections, action.payload];

        case "DELETE_COLLECTION":
            const remainedCollections = state.filter(c => c.id !== action.payload);
            return [...remainedCollections];

        case "ADD_PLANT_TO_COLLECTION":
            const collections = state.filter(c => c.id !== action.payload.id)
            return [...collections, action.payload];
        
        case "DELETE_PLANT_FROM_COLLECTION":
            const existingCollections = state.filter(c => c.id !== action.payload.id)
            return [...existingCollections, action.payload];

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
        
        case "ADD_PLANT_TO_COLLECTION":
            const existingPlants = state.filter(p => !action.payload.attributes.plants.some(cp => cp.id === p.id))
            console.log(existingPlants)
            return [...existingPlants];

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