import { useCollapseDrawer } from '@theme/hooks'
import { Box, Grid } from '@mui/material'
import { CommerceCardsList } from '@/app/business/cards/components/CommerceCardsList'
import { CommerceViaboCardDetails } from '@/app/business/cards/components/CommerceViaboCardDetails'

export function CommerceCardsLayout() {
  const { isCollapse } = useCollapseDrawer()

  return (
    <Grid container sx={{ height: '100vH' }}>
      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        lg={isCollapse ? 4 : 5}
        xl={3}
        sx={theme => ({
          borderRight: {
            sm: `1px solid ${theme.palette.divider}`
          },
          borderRightStyle: { xs: 'none', sm: 'dashed!important' }
        })}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CommerceCardsList />
        </Box>
      </Grid>

      <Grid
        item
        xs={false}
        sm={6}
        md={6}
        lg={isCollapse ? 8 : 7}
        xl={9}
        sx={{ px: 2, flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CommerceViaboCardDetails />
        </Box>
      </Grid>
    </Grid>
  )
}
