import { useEffect, useMemo, useState } from 'react'

import { sub } from 'date-fns'

import { useAdminDashboardSpeiStore } from '@/app/business/viabo-spei/dashboard/admin-stp/store'
import { useFindSpeiBalanceResume } from '@/app/business/viabo-spei/shared/hooks'
import { InputDateRange } from '@/shared/components/form'

export const AdminSpeiFilterBalance = () => {
  const setFilter = useAdminDashboardSpeiStore(state => state.setBalanceFilter)
  const setBalance = useAdminDashboardSpeiStore(state => state.setBalanceResume)
  const filterDate = useAdminDashboardSpeiStore(state => state.balanceFilter)

  const currentDate = new Date()
  const initialStartDate = useMemo(
    () => (filterDate?.startDate ? new Date(filterDate?.startDate) : sub(currentDate, { days: 30 })),
    [filterDate?.startDate]
  )
  const initialEndDate = useMemo(
    () => (filterDate?.endDate ? new Date(filterDate?.endDate) : currentDate),
    [filterDate?.endDate]
  )

  const [startDate, setStartDate] = useState(initialStartDate)
  const [endDate, setEndDate] = useState(initialEndDate)

  const { data, refetch, isError } = useFindSpeiBalanceResume(startDate, endDate)

  useEffect(() => {
    if (startDate && endDate) {
      refetch()
      setFilter({ startDate, endDate })
    }
  }, [startDate, endDate])

  useEffect(() => {
    if (data) {
      setBalance(data)
    }
  }, [data])

  useEffect(() => {
    if (isError) {
      setBalance(null)
    }
  }, [isError])

  const handleDateRange = range => {
    const { startDate, endDate } = range
    if (endDate !== null && startDate !== null) {
      setEndDate(endDate)
      setStartDate(startDate)
    }
  }

  return <InputDateRange startDate={startDate} endDate={endDate} onSubmit={handleDateRange} />
}
