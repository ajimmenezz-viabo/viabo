import PropTypes from 'prop-types'

import { Box, useTheme } from '@mui/material'

FullLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object
}

export function FullLogo({ disabledLink = false, sx }) {
  const theme = useTheme()
  const PRIMARY_LIGHT = theme.palette.primary.light
  const PRIMARY_MAIN = theme.palette.primary.main
  const PRIMARY_DARK = theme.palette.primary.dark

  return (
    <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={PRIMARY_MAIN}
        id="Capa_2"
        data-name="Capa 2"
        viewBox="0 0 73.29 20.13"
      >
        <g id="Layer_1" data-name="Layer 1">
          <path d="M45.24 6.55c.18-.11.25-.14.32-.19 3.23-2.57 9.51-1.33 10.84 4.15.37 1.55.36 3.09-.17 4.59-.97 2.77-3.03 4.24-5.85 4.73-1.29.23-2.57.2-3.83-.2-2.98-.93-4.92-3.52-4.95-6.69-.03-4.04-.03-8.09-.04-12.13V.68c.02-.61.08-.67.69-.68h2.16c.81 0 .82 0 .82.8v5.75Zm7.61 5.83c-.03-.22-.06-.55-.13-.87-.39-1.8-2-3.11-3.76-3.06a3.83 3.83 0 0 0-3.66 3.18c-.17.97-.03 1.92.38 2.82.64 1.39 2.18 2.23 3.71 2.05 1.88-.22 3.39-1.56 3.46-4.12Zm-16.49 6.61c-.28.14-.52.24-.75.36-4.44 2.28-10.12-.71-10.81-5.7-.59-4.21 2.15-7.93 6.33-8.68 4.41-.78 8.53 2.65 8.76 6.92.09 1.7.05 3.41.07 5.11v1.97c0 .74-.05.79-.77.8-.5 0-1.01-.01-1.51 0-.6.02-1.14-.04-1.32-.79Zm-.06-6.52c-.04-.83-.23-1.63-.66-2.37-1.47-2.47-4.84-2.64-6.56-.33-1.35 1.82-1.1 4.56.57 6.1 1.07.98 3.21 1.59 4.88.25 1.17-.94 1.72-2.17 1.77-3.66Zm29.38 7.54c-4.2-.03-7.59-3.45-7.54-7.63.04-4.18 3.47-7.53 7.68-7.5 4.1.03 7.48 3.45 7.48 7.57 0 4.19-3.43 7.59-7.61 7.56Zm4-7.53c0-1.3-.44-2.41-1.36-3.32-1.52-1.51-3.83-1.5-5.36-.01-1.9 1.86-1.68 4.7-.18 6.42 1.08 1.24 3.53 1.93 5.26.41 1.06-.93 1.62-2.09 1.64-3.5ZM7.59 18.25c-.2-.32-.32-.5-.42-.68-.66-1.13-1.29-2.28-1.98-3.39-.27-.44-.23-.78 0-1.2.96-1.71 2.12-3.25 3.55-4.59.48-.45.97-.88 1.45-1.33.38-.35.37-.37.12-.83-.23-.41-.47-.82-.74-1.3h8.69c-1.44 2.5-2.85 4.92-4.27 7.38-.63-.42-.67-1.19-1.28-1.64-2.35 2.04-4.18 4.41-5.12 7.6Zm15.52-5.82v6.42c0 .82-.01.83-.86.83h-2.16c-.61 0-.68-.07-.68-.68V5.96c0-.75.04-.79.76-.8h2.23c.65 0 .71.06.71.72v6.55ZM0 4.9c.2-.01.38-.04.57-.04 1.33 0 2.66.01 3.99-.01.44 0 .73.11.93.53.48 1 1.02 1.98 1.5 2.98.07.14.07.42-.03.53-1 1.18-1.88 2.46-2.61 3.84C3.94 12.37.24 5.72-.01 4.9Z" />
          <path d="M10.8 13.68c1.17 2.03 2.27 3.92 3.41 5.89-.25.03-.41.07-.57.07H9.58c-.76 0-1.16-.44-1.11-1.19.01-.17.04-.35.1-.51.43-1.36 1.07-2.62 1.9-3.78.09-.12.17-.25.34-.48Z" />
        </g>
      </svg>
    </Box>
  )
}
