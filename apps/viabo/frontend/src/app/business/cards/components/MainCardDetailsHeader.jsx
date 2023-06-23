import { Stack, Toolbar, Typography } from '@mui/material'

export function MainCardDetailsHeader({ card }) {
  return (
    <Toolbar
      sx={theme => ({
        borderRadius: 1,
        position: 'relative',
        zIndex: 1,
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        minHeight: 'auto!important',
        height: { xs: 1, sm: 'auto' },
        py: { xs: 0, sm: 2 }
      })}
    >
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        sx={{ width: 1 }}
        gap={2}
        alignItems={'center'}
      >
        <Stack flexDirection="column" spacing={0} alignItems={{ xs: 'center', md: 'start' }}>
          <Stack flexDirection={'row'} gap={1} alignItems={'center'}>
            <Typography variant="subtitle2">Disponible</Typography>
          </Stack>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Typography variant="h3">{card?.balanceFormatted}</Typography>
            <Typography variant="caption">MXN</Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="flex-end" spacing={1} alignItems={{ xs: 'center', md: 'end' }}></Stack>
      </Stack>
    </Toolbar>
  )
}
