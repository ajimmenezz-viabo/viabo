import { getCryptInfo } from '@/shared/utils'

export const AssignCardsAdapter = (formValues, cards) => {
  const { phone, email, name } = formValues
  const data = {
    name,
    phone,
    email,
    cards: cards?.map(card => card?.id) || []
  }
  return getCryptInfo(data)
}
