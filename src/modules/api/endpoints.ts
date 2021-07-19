export const JOBS = 'jobs'
export const EMPS = 'employees'

const ENDPOINTS = {
    [JOBS]: {
        uri: '/jobs',
        method: 'GET', 
    },
    [EMPS]: {
        uri: '/employees',
        method: 'GET'
    }
}

export default ENDPOINTS