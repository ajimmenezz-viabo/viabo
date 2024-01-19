import { convertCatalogToReactSelect } from '@/shared/utils'

export const ProfilesAdapter = profiles => {
  const profilesAdapted = profiles?.map(profile => ({
    id: profile?.id,
    status: profile?.active,
    name: profile?.name,
    initUrl: profile?.urlInit,
    level: getRandomLevel(profiles.length)
  }))

  return convertCatalogToReactSelect(profilesAdapted, 'id', 'name', 'status')
}

const getRandomLevel = arrayLength => Math.floor(Math.random() * arrayLength) + 1
