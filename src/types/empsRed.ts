export interface IEmpState {
    emps: any[] | null,
    loading: boolean,
    error: string | null,
}

export enum EmpsActionTypes {
    FETCH_EMPS = "FETCH_EMPS",
    FETCH_EMPS_SUCCESS = "FETCH_EMPS_SUCCESS",
    FETCH_EMPS_ERROR = "FETCH_EMP_ERROR",
}