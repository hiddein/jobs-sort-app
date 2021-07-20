import { IJobsState, JobsActionTypes } from "../../types/jobsRed"

const initialState: IJobsState = {
  jobs: null,
  loading: false,
  error: null,
  selectedJob: null,
}

export const jobsReducer = (state = initialState, action: any): IJobsState => {
  switch (action.type) {
    case JobsActionTypes.FETCH_JOBS:
      return { ...state, loading: true, error: null }

    case JobsActionTypes.FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, error: null, jobs: action.payload }

    case JobsActionTypes.FETCH_JOBS_ERROR:
      return { ...state, loading: true, error: action.payload }

    case JobsActionTypes.SET_SELECTED_JOB:
      return { ...state, selectedJob: action.payload }

    default:
      return state
  }
}

export const fetchJobs = () => ({
  type: JobsActionTypes.FETCH_JOBS,
})

export const fetchJobsSuccess = (emps: any) => ({
  type: JobsActionTypes.FETCH_JOBS_SUCCESS,
  payload: emps,
})

export const fetchJobsError = (error: string) => ({
  type: JobsActionTypes.FETCH_JOBS_ERROR,
  payload: error,
})

export const setSelectedJob = (id: number) => ({
  type: JobsActionTypes.SET_SELECTED_JOB,
  payload: id,
})
