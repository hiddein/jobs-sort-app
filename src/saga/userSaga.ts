import { takeEvery, put } from "redux-saga/effects"
import { fetchEmpsError, fetchEmpsSuccess } from "../store/reducers/empsReduser"
import { EmpsActionTypes } from "../types/empsRed"
import api from "../modules/api/api"
import { EMPS } from "../modules/api/endpoints"

export function* onEmpsLoad(): any {
    try{
        const response = yield api.fetch(EMPS)
        yield put(fetchEmpsSuccess(response))
    }
    catch (e) {
        yield put(fetchEmpsError(e.message))
    }
}

export function* watchEmpsLoad() {
  yield takeEvery(EmpsActionTypes.FETCH_EMPS, onEmpsLoad)
}
