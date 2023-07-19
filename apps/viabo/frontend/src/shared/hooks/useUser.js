import { useAuth } from '@/shared/hooks/useAuth'
import { useGetQueryData } from '@/shared/hooks/reactQuery'
import { AUTHENTICATION_KEYS } from '@/app/authentication/adapters'

export function useUser() {
  const auth = useAuth()
  const user = auth?.user
  const modules = useGetQueryData([AUTHENTICATION_KEYS.USER_MODULES]) ?? []
  return user
    ? {
        ...user,
        menu: modules?.menu,
        permissions: modules?.permissions || []
      }
    : null
}
