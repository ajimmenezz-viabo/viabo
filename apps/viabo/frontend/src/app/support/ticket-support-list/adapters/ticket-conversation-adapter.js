import { fToNowStrict } from '@/shared/utils'

export const TicketConversationAdapter = (data, pageParam) => {
  const { total, page, limit } = data

  const participants =
    data?.participants?.map((participant, index) => {
      const { name, initials, photo } = participant
      return {
        id: index,
        name,
        initials,
        avatar: photo && photo !== '' ? photo : '/'
      }
    }) || []

  const messages =
    data?.messages?.map((message, index) => ({
      id: message?.id,
      name: message?.name,
      initials: message?.initials,
      message: message?.message,
      createDate: {
        fToNow: message?.createDate ? fToNowStrict(message?.createDate) : '',
        original: message?.createDate
      },
      my: message?.my,
      attachment: message?.localAttachment?.split(',') || [],
      avatar: message?.photo && message?.photo !== '' ? message?.photo : '/'
    })) || []

  return {
    participants,
    messages
  }
}
