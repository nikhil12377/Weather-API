import { combineReducers } from "redux";
import PlaceDataReducer from './PlaceDataReducer';
import PlaceReducer from './PlaceReducer';
import ThemeReducer from './ThemeReducer';

// we created a rootReducer object by combining
// all the reducers we have 
const rootReducer = combineReducers({
    place: PlaceReducer,
    placeData: PlaceDataReducer,
    theme: ThemeReducer
})

export default rootReducer;