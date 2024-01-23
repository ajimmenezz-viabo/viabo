import { Box, Card, Icon, Stack, Typography, alpha, styled } from '@mui/material'

import { fCurrency, fPercent } from '@/shared/utils'
import { cssStyles } from '@/theme/utils'

const IconWrapperStyle = styled('div')(({ theme }) => ({
  width: 24,
  height: 24,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1)
}))

const CommerceSpeiSummary = ({ title, total, color, icon, percent }) => (
  <Card
    variant="outlined"
    sx={theme => ({
      ...cssStyles(theme).bgBlur({
        blur: 20,
        opacity: 0.4,
        color: theme.palette.mode === 'light' ? '#f4f6f8' : '#212b36'
      }),
      boxShadow: theme.customShadows.z24,
      display: 'flex',
      alignItems: 'center',
      p: 3,
      flexGrow: 1
    })}
  >
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="subtitle2" paragraph>
        {title}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {fCurrency(total)}
      </Typography>

      <Stack direction="row" alignItems="center">
        <IconWrapperStyle
          sx={{
            color: theme => theme.palette[color].main,
            bgcolor: theme => alpha(theme.palette[color].main, 0.16)
          }}
        >
          <Icon style={{ fontSize: '16px' }} sx={{ color: theme => theme.palette[color].main, fontSize: 2 }}>
            {icon}
          </Icon>
        </IconWrapperStyle>

        <Typography variant="subtitle2" component="span">
          {percent > 0 && '+'}
          {fPercent(percent)}
        </Typography>
        <Typography variant="body2" component="span" noWrap sx={{ color: 'text.secondary' }}>
          &nbsp; que el mes pasado
        </Typography>
      </Stack>
    </Box>
  </Card>
)

export default CommerceSpeiSummary
