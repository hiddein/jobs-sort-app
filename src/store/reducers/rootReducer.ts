import { combineReducers } from "redux"
import { jobsReducer } from './jobsReducer'
import { empsReducer } from './empsReduser'


export const rootReducer = combineReducers({
    emp: empsReducer,
    jobs: jobsReducer
})

export type rootState = ReturnType<typeof rootReducer>