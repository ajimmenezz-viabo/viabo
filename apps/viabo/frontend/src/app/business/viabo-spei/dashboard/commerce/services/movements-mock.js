import { faker } from '@faker-js/faker'

import { _mock } from '@/app/shared/_mock'

const OPERATIONS_TYPES = {
  INCOME: 'ingreso',
  EXPENSES: 'gasto'
}

const STATUS_TYPES = [
  { name: 'en proceso', color: 'warning' },
  { name: 'liquidado', color: 'success' }
]

const getRandomDate = () => faker.date.between({ from: '2022-01-01T00:00:00.000Z', to: new Date() }).getTime()

const getRandomStatus = () => faker.helpers.arrayElement(STATUS_TYPES)
const getRandomOperation = () => faker.helpers.arrayElement(Object.values(OPERATIONS_TYPES))

const movementsMock = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  key: faker.number.int({ min: 1000000 }),
  type: getRandomOperation(),
  date: getRandomDate(),
  status: getRandomStatus(),
  bank: _mock.bank.name(index),
  concept: faker.lorem.words(),
  amount: faker.number.float({ min: 300, max: 100000, precision: 0.01 })
}))

export { OPERATIONS_TYPES, STATUS_TYPES, movementsMock }
