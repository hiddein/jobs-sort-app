import { takeEvery, put } from "redux-saga/effects"
import api from "../modules/api/api"
import { JOBS } from "../modules/api/endpoints"
import { fetchJobsError, fetchJobsSuccess } from "../store/reducers/jobsReducer"
import { JobsActionTypes } from "../types/jobsRed"

export function* onJobsLoad(): any {
    try{
        const response = yield api.fetch(JOBS)
        yield put(fetchJobsSuccess(response))
    }
    catch (e) {
        yield put(fetchJobsError(e.message))
    }
}

export function* watchJobsLoad() {
  yield takeEvery(JobsActionTypes.FETCH_JOBS, onJobsLoad)
}
