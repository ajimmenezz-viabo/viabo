import { alpha } from '@mui/material/styles'

// ----------------------------------------------------------------------

export default function Backdrop(theme) {
  const varLow = alpha(theme.palette.grey[900], 0.48)
  const varHigh = alpha(theme.palette.grey[900], 1)

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgba(33, 43, 54, 0.8)',
          '&.MuiBackdrop-invisible': {
            background: 'transparent'
          }
        }
      }
    }
  }
}
