import { PayCashLogo, SpeiLogo, ViaboCardLogo, ViaboPayLogo } from '@/shared/components/images'

const OPERATION_TYPES = [
  {
    name: 'VIABO CARD',
    component: ViaboCardLogo
  },
  {
    name: 'VIABO PAY',
    component: ViaboPayLogo
  },
  {
    name: 'SPEI',
    component: SpeiLogo
  },
  {
    name: 'PAYCASH',
    component: PayCashLogo
  }
]

const getOperationTypeByName = name => OPERATION_TYPES.find(card => card?.name === name?.toUpperCase().trim())

const getNameOperationTypes = () => OPERATION_TYPES.map(cardType => cardType?.name) || []

export { getNameOperationTypes, getOperationTypeByName }
