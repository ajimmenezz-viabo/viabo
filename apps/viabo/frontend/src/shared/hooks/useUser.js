import { useAuth } from '@/shared/hooks/useAuth'
import { useGetQueryData } from '@/shared/hooks/reactQuery'
import { AUTHENTICATION_KEYS } from '@/app/authentication/adapters'

export function useUser() {
  const auth = useAuth()
  const user = auth?.user
  const modules = useGetQueryData([AUTHENTICATION_KEYS.USER_MODULES]) ?? []
  const userActions = modules?.userActions !== '' ? modules?.userActions?.split(',') : []
  return user
    ? {
        ...user,
        modules: { ...modules, userActions }
      }
    : null
}
