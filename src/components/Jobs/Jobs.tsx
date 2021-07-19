import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import api from "../../modules/api/api"
import { JOBS } from "../../modules/api/endpoints"
import { fetchJobs, fetchJobsError, fetchJobsSuccess } from "../../store/reducers/jobsReducer"

const Jobs: React.FC = () => {
  const stateJobs = useTypedSelector((state) => state.jobs.jobs)
  console.log(stateJobs)
  const dispatch = useDispatch()

 
  return <div>
      {stateJobs && stateJobs.map((item,index)=> {
          return (
              <div key={index}>
                  {item.id}
              </div>
          )
      } )}
  </div>
}

export default Jobs
