import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { fetchJobs } from "../../store/reducers/jobsReducer"
import { Navigation } from "../Navigation"

const Jobs: React.FC = () => {
  const stateJobs = useTypedSelector((state) => state.jobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  return (
    <Navigation
      loading={stateJobs.loading}
      services={stateJobs.jobs}
      title={"react + redux + redux-saga app"}
    />
  )
}

export default Jobs
