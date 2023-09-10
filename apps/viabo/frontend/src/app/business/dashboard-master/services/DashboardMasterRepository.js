import { GlobalCardsAdapter } from '@/app/business/dashboard-master/adapters'

const globalCards = [
  {
    paymentProcessor: 'CARNET',
    balance: 660,
    inTransit: 0,
    cardId: '36254614-95cf-4cfd-99c1-d4c2c2c74b9a',
    SPEI: '646180300800142579'
  },
  {
    paymentProcessor: 'MASTER CARD',
    balance: 1560,
    inTransit: 200,
    cardId: '1293bae1-c835-4a71-8457-466cd63692e5',
    SPEI: '34234234333432443'
  }
]
export const getGlobalCards = async () =>
  // const { data } = await axios.get(``)
  GlobalCardsAdapter(globalCards)

export const getMasterMovements = async (initialDate, finalDate, signal) =>
  // const { data } = await axios.get(`/api/master/movements/${initialDate}/to/${finalDate}`)
  []
