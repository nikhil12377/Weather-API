const UpdatePlace = (place) => {
    return {
        type: "UPDATE_PLACE",
        payload: place
    };
};

// this action takes the name of location as an argument
// and fetch the data from weather API by providing the location
// also we are using redux-thunk here
const UpdatePlaceData = (place) => {
    return (dispatch) => {
        fetch(
            `https://api.weatherapi.com/v1/current.json?key=7293607f61b848339b9110324212608&q=${place}`
        )
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: "UPDATE_PLACE_DATA",
                    payload: data
                })
            });

    }
};

const ToggleTheme = () => {
    return {
        type: "TOGGLE_THEME"
    };
};

export { UpdatePlace, UpdatePlaceData, ToggleTheme };