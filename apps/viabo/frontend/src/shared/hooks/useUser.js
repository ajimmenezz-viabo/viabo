import { useAuth } from '@/shared/hooks/useAuth'

export function useUser() {
  const auth = useAuth()
  return auth?.user || null
}
