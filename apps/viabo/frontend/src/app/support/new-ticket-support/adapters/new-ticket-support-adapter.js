export const NewTicketSupportAdapter = ticket => {
  const formData = new FormData()

  const ticketAdapted = {
    causeId: ticket?.cause,
    description: ticket?.description
  }

  Object.entries(ticketAdapted)?.forEach(([key, value]) => {
    formData.append(key, value)
  })

  if (ticket?.file) {
    formData.append('file', ticket?.file)
  }

  return formData
}
