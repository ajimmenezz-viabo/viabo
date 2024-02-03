export const AddMessageToTicketAdapter = (ticketId, conversation) => {
  const { message, attachments } = conversation
  const formData = new FormData()

  formData.append('message', message)
  formData.append('tickedId', ticketId)
  attachments.forEach(file => {
    formData.append('files[]', file)
  })

  return formData
}
