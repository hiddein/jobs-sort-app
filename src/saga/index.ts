import { all } from "redux-saga/effects"
import { watchJobsLoad } from "./jobsSaga"
import { watchEmpsLoad } from "./userSaga"

export function* rootWatcher() {
  yield all([watchJobsLoad(), watchEmpsLoad()])
}
