import { useEffect, useMemo } from "react"
import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { fetchEmps } from "../../store/reducers/empsReduser"

const Emps: React.FC = () => {
  const emps = useTypedSelector((state) => state.emp)
  const selectedJob = useTypedSelector((state) => state.jobs.selectedJob)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEmps())
  }, [dispatch])

  const preparedData = useMemo(() => {
    if (!Array.isArray(emps)) {
      return []
    }

    if (!selectedJob) {
      return emps
    }

    return emps.filter((employee) => employee.job === selectedJob)
  }, [emps, selectedJob])

  return <div>Emps Component</div>
}

export default Emps
