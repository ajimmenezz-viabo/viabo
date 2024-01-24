import { _mock } from '@/app/shared/_mock'

export const beneficiaresMock = [...Array(12)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  bank: _mock.bank.name(index)
}))
