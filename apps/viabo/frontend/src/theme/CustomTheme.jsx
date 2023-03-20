import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useSettings } from '@theme/hooks/useSettings'
import { useMemo } from 'react'
import { breakpoints, customShadows, palette, shadows, typography } from '@theme/overrides/options'
import { ComponentsOverrides } from '@theme/overrides/components'
import PropTypes from 'prop-types'

export const CustomTheme = ({ children }) => {
  const { themeMode, themeDirection } = useSettings()
  const isLight = themeMode === 'light'

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight, themeDirection]
  )

  const theme = createTheme(themeOptions)

  // theme = responsiveFontSizes(theme);

  theme.components = ComponentsOverrides(theme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

CustomTheme.propTypes = {
  children: PropTypes.node
}
