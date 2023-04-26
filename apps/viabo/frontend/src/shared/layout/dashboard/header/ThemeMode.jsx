import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButtonAnimate } from '@/shared/components/animate'
import { useSettings } from '@theme/hooks'

export function ThemeMode() {
  const { themeMode, onChangeMode } = useSettings()

  const handleChangeMode = () => {
    const value = themeMode === 'light' ? 'dark' : 'light'
    onChangeMode({
      target: {
        value
      }
    })
    window.localStorage.setItem('dashboardTheme', value)
  }

  return (
    <IconButtonAnimate color="primary" sx={{ width: 30, height: 30 }} onClick={handleChangeMode}>
      {themeMode === 'light' ? <DarkMode /> : <LightMode />}
    </IconButtonAnimate>
  )
}
