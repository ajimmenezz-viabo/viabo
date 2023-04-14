import React from 'react'
import { Avatar } from '@/shared/components/avatar/Avatar'
import { createAvatar } from '@theme/utils'
import { useUser } from '@/shared/hooks'

export function MyAvatar({ ...other }) {
  const user = useUser()

  return (
    <Avatar
      src={user?.avatar !== '' ? user?.avatar : ''}
      alt={user?.name}
      color={user?.avatar !== '' ? 'default' : createAvatar(user?.name).color}
      {...other}
    >
      {createAvatar(user?.name).name}
    </Avatar>
  )
}