import { Box, CircularProgress, circularProgressClasses } from '@mui/material'

export function CircularLoading(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round'
          }
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  )
}
