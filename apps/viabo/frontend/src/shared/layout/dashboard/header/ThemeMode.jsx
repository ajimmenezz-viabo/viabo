import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButtonAnimate } from '@/shared/components/animate'
import { useSettings } from '@theme/hooks'

export function ThemeMode() {
  const { themeMode, onChangeMode } = useSettings()

  const handleChangeMode = () => {
    onChangeMode({
      target: {
        value: themeMode === 'light' ? 'dark' : 'light'
      }
    })
  }

  return (
    <IconButtonAnimate color="primary" sx={{ width: 30, height: 30 }} onClick={handleChangeMode}>
      {themeMode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButtonAnimate>
  )
}
