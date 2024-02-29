import { useMemo } from 'react'

import { sub } from 'date-fns'

import { InputDateRange } from '@/shared/components/form'

export const AdminSpeiFilterBalance = () => {
  const currentDate = new Date()

  const filterDate = null

  const startDate = useMemo(
    () => (filterDate?.startDate ? new Date(filterDate?.startDate) : sub(currentDate, { days: 30 })),
    [filterDate?.startDate]
  )
  const endDate = useMemo(
    () => (filterDate?.endDate ? new Date(filterDate?.endDate) : currentDate),
    [filterDate?.endDate]
  )

  return (
    <>
      <InputDateRange startDate={startDate} endDate={endDate} />
    </>
  )
}
