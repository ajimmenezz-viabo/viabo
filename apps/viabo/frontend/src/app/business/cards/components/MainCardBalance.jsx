import { Alert, Box, Paper, Stack, Typography } from '@mui/material'
import { RequestLoadingComponent } from '@/shared/components/loadings'
import { alpha, styled } from '@mui/material/styles'
import { useFindMainCard } from '@/app/business/cards/hooks/useFindMainCard'
import { CardMembershipTwoTone } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center'
}))

export function MainCardBalance() {
  const { data, isLoading, isError, error, refetch, isSuccess, isRefetching } = useFindMainCard()

  const color = 'primary'

  if (isLoading) {
    return (
      <Box p={3}>
        <RequestLoadingComponent open={isLoading} width={20} height={20} />
      </Box>
    )
  }

  if (isError) {
    return (
      <Box>
        <Alert
          severity={'error'}
          sx={{ width: 1 }}
          action={
            <LoadingButton loading={isRefetching} color="inherit" size="small" onClick={() => refetch()}>
              Recargar
            </LoadingButton>
          }
        >
          {error}
        </Alert>
      </Box>
    )
  }

  if (isSuccess) {
    return (
      <Paper
        variant="outlined"
        sx={{
          textAlign: 'center',
          color: theme => theme.palette[color].darker,
          bgcolor: theme => theme.palette[color].lighter
        }}
      >
        <Box
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            backgroundColor: 'transparent',
            alignItems: 'center',
            background: theme =>
              `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                theme.palette[color].dark,
                0.24
              )} 100%)`
          }}
        >
          <IconWrapperStyle
            sx={{
              color: theme => theme.palette[color].dark,
              backgroundColor: 'transparent',
              background: theme =>
                `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                  theme.palette[color].dark,
                  0.24
                )} 100%)`
            }}
          >
            <CardMembershipTwoTone sx={{ width: 25, height: 25 }} />
          </IconWrapperStyle>

          <Stack spacing={1}>
            <Stack direction={'row'} spacing={2} alignItems={'center'}>
              <Typography variant="h3">{data?.balanceFormatted}</Typography>
              <Typography variant="caption">MXN</Typography>
            </Stack>
            <Typography variant="subtitle2" gutterBottom>
              Saldo Disponible
            </Typography>
          </Stack>
        </Box>
      </Paper>
    )
  }
}
