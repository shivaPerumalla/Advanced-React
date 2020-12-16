import { all, takeLatest, put,select,call} from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";
import makeSelectLoginPage from '../../LoginPage/meta/selectors';
import {getEndpointURL} from '../../../utils/endpoint'
import network from '../../../utils/network';
import { saveDataToStorage ,clearDataFromStorage} from '../../../utils/cookies';
function* handleGetAuth(action) {
    try {
        const loginPage = yield select(makeSelectLoginPage());
        const request = {username : 'admin@gmail.com', password : '1234'};
        const action = getEndpointURL('AUTHENTICATE');
        const response =  yield call(network.post,action,request);
         yield call(saveDataToStorage,response);
        yield put(actions.getAuthSuccess(response))
    } catch(error) {
        yield put(actions.getAuthError(error))
    }
}

function* handleLogout (){
 yield call(clearDataFromStorage);

}
export default function*() {
    yield all([
        yield takeLatest(constants.GET_AUTH, handleGetAuth),
        yield takeLatest(constants.LOG_OUT,handleLogout)

    ]);
}
