import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { useSettings } from '@theme/hooks/useSettings'
import { useMemo } from 'react'
import { breakpoints, customShadows, palette, shadows, typography } from '@theme/overrides/options'
import { ComponentsOverrides } from '@theme/overrides/components'
import PropTypes from 'prop-types'
import { Bounce, ToastContainer } from 'react-toastify'

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
    <StyledEngineProvider injectFirst>
      <ToastContainer
        theme={themeMode}
        position="top-center"
        transition={Bounce}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

CustomTheme.propTypes = {
  children: PropTypes.node
}
