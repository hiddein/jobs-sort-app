import { EmpsActionTypes, IEmpState } from "../../types/empsRed"

const initialState: IEmpState = {
  emps: null,
  loading: false,
  error: null,
}

export const empsReducer = (state = initialState, action: any): IEmpState => {
  switch (action.type) {
    case EmpsActionTypes.FETCH_EMPS:
      return { ...state, loading: true, error: null,  }

    case EmpsActionTypes.FETCH_EMPS_SUCCESS:
      return { ...state, loading: false, error: null, emps: action.payload }

    case EmpsActionTypes.FETCH_EMPS_ERROR:
      return { ...state, loading: true, error: action.payload }

    default:
      return state
  }
}

export const fetchEmps = () => ({
  type: EmpsActionTypes.FETCH_EMPS,
})

export const fetchEmpsSuccess = (emps: any) => ({
  type: EmpsActionTypes.FETCH_EMPS_SUCCESS,
  payload: emps,
})

export const fetchEmpsError = (error: string) => ({
  type: EmpsActionTypes.FETCH_EMPS_ERROR,
  payload: error,
})
