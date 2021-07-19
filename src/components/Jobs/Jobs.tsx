import { useDispatch } from "react-redux"
import { useEffect } from "react-redux/node_modules/@types/react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { fetchJobs } from "../../store/reducers/jobsReducer"

const Jobs: React.FC = () => {
  const stateJobs = useTypedSelector((state) => state.jobs.jobs)
  console.log(stateJobs)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchJobs())
  },[dispatch])

 
  return <div>
      <button onClick={()=> dispatch(fetchJobs())} ></button>
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
