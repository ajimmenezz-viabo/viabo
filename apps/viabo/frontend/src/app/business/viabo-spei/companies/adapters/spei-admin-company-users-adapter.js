import { convertCatalogToReactSelect, getDecryptInfo } from '@/shared/utils'

export const SpeiAdminCompanyUsersAdapter = users => {
  const decryptedUsers = getDecryptInfo(users?.ciphertext, users?.iv)

  if (!decryptedUsers) {
    throw new Error('No se pueden obtener los usuarios administradores de empresas')
  }

  const usersAdapted = decryptedUsers?.map(user => ({
    id: user?.id,
    name: user?.name,
    status: !!user?.status
  }))

  return convertCatalogToReactSelect(usersAdapted, 'id', 'name', 'status')
}
