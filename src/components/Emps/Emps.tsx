import { useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { fetchEmps } from "../../store/reducers/empsReduser"
import { ProfileGrid } from "./ProfileGrid"

const Emps: React.FC = () => {
  const empsState = useTypedSelector((state) => state.emp)
  const selectedJob = useTypedSelector((state) => state.jobs.selectedJob)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmps())
  }, [dispatch])

  const preparedData = useMemo(() => {
    if (!Array.isArray(empsState.emps)) {
      return []
    }

    if (!selectedJob) {
      return empsState.emps
    }

    return empsState.emps.filter((employee) => employee.job === selectedJob)
  }, [empsState, selectedJob])

  return <ProfileGrid profiles={preparedData} loading={empsState.loading} />
}

export default Emps
