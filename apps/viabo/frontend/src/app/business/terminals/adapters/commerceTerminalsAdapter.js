import { fCurrency } from '@/shared/utils'

export const CommerceTerminalsAdapter = terminals =>
  terminals?.map(terminal => ({
    id: terminal?.id,
    commerceId: terminal?.commerceId,
    terminalId: terminal?.terminalId,
    terminalON: terminal?.apiData?.status === 1,
    country: terminal?.apiData?.country,
    date: {
      created: terminal?.apiData?.created_at,
      updated: terminal?.apiData?.updated_at,
      register: terminal?.registerDate
    },
    name: terminal?.name,
    active: terminal?.active === '1',
    balanceFormatted: fCurrency('0')
  })) || []
