export const SpeiThirdAccountsListAdapter = accounts =>
  accounts?.map(account => ({
    id: account?.id,
    name: account?.alias && account?.alias?.trim() !== '' ? account?.alias : account?.beneficiary,
    beneficiary: account?.beneficiary,
    alias: account?.alias,
    clabe: account?.interbankCLABE,
    email: account?.email,
    phone: account?.phone,
    bank: { name: account?.shorNameBank, id: account?.bankId },
    status: account?.active === '1',
    date: account?.date,
    rfc: account?.rfc
  })) || []
