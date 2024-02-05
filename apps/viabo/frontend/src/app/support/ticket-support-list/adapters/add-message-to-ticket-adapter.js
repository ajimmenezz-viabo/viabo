import { getNameAvatar } from '@/theme/utils'

export const AddMessageToTicketAdapter = (ticketId, conversation, user) => {
  const { message, attachments } = conversation
  const formData = new FormData()

  formData.append('message', message)
  formData.append('ticketId', ticketId)

  attachments?.forEach(file => {
    formData.append('files[]', file)
  })
  const createDate = new Date().toLocaleString()

  const optimisticMessage = {
    id: self.crypto.randomUUID(),
    name: user?.name,
    initials: getNameAvatar(user?.name || ''),
    message,
    createDate: {
      fToNow: 'justo ahora',
      original: createDate
    },
    my: true,
    attachment: attachments || [],
    avatar: message?.photo && message?.photo !== '' ? message?.photo : '/',
    isSent: false
  }

  return {
    data: formData,
    ticketId,
    optimistic: optimisticMessage
  }
}
