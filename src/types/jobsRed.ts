export interface IJobsState {
    jobs: any[] | null,
    loading: boolean,
    error: string | null,
    selectedJob: number | null
}

export enum JobsActionTypes {
  FETCH_JOBS = "FETCH_JOBS",
  FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
  FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR",
  SET_SELECTED_JOB = "SET_SELECTED_JOB"
}
