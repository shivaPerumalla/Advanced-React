import * as constants from "./constants";


export const getNewContainer = () => ({
    type: constants.GET_NEWCONTAINER,
});

export const getNewContainerSuccess = payload => ({
    type: constants.GET_NEWCONTAINER_SUCCESS,
    payload,
});

export const getNewContainerError = payload => ({
    type: constants.GET_NEWCONTAINER_ERROR,
    payload,
});
