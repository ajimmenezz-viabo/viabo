import { AmexLogo, CarnetLogo, MasterCardLogo, VisaLogo } from '@/shared/components/images'

const CARD_TYPES = [
  {
    name: 'MASTER CARD',
    component: MasterCardLogo
  },
  {
    name: 'CARNET',
    component: CarnetLogo
  },
  {
    name: 'VISA',
    component: VisaLogo
  },
  {
    name: 'AMEX',
    component: AmexLogo
  }
]

const getCardTypeByName = name => CARD_TYPES.find(card => card?.name === name.toUpperCase().trim())

export { getCardTypeByName }
