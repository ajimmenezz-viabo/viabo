// ----------------------------------------------------------------------

export default function CssBaseline() {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          '*::-webkit-scrollbar': {
            height: 6,
            width: '0.4em'
          },
          '*::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: '7px'
          }
        },
        // input: {
        //   '&[type=number]': {
        //     MozAppearance: 'textfield',
        //     '&::-webkit-outer-spin-button': {
        //       margin: 0,
        //       WebkitAppearance: 'none'
        //     },
        //     '&::-webkit-inner-spin-button': {
        //       margin: 0,
        //       WebkitAppearance: 'none'
        //     }
        //   }
        // },
        img: {
          display: 'block',
          maxWidth: '100%'
        }
      }
    }
  }
}
