import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetNewContainer(action) {
    try {
        yield put(actions.getNewContainerSuccess())
    } catch(error) {
        yield put(actions.getNewContainerError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_NEWCONTAINER, handleGetNewContainer),
    ]);
}
