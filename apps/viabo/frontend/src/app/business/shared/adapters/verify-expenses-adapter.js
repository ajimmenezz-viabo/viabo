export const VerifyExpensesAdapter = (data, movements) => {
  const { files, note, method } = data
  const formData = new FormData()

  files?.forEach(file => {
    formData.append('files[]', file)
  })

  const movementsAdapted =
    movements?.map(movement => ({
      ...movement?.original
    })) || []

  formData.append('movements', JSON.stringify(movementsAdapted))
  formData.append('note', note)
  formData.append('isInvoice', method === 'invoice')

  return formData
}
