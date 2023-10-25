import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const VerifyExpensesAdapter = (data, movements) => {
  const { files, note, method } = data
  const formData = new FormData()
  if (files?.length === 0) {
    formData.append('files[]', null)
  }

  files?.forEach(file => {
    formData.append('files[]', file)
  })

  const movementsAdapted =
    movements?.map(movement => ({
      id: movement?.id,
      date: movement?.serverDate ? format(new Date(movement.serverDate), 'yyyy-MM-dd HH:mm', { locale: es }) : null,
      amount: movement?.amount?.toString(),
      operationType: movement?.operationType
    })) || []

  formData.append('movements ', JSON.stringify(movementsAdapted))
  formData.append('note', note)
  formData.append('isInvoice', method === 'invoice')

  return formData
}
