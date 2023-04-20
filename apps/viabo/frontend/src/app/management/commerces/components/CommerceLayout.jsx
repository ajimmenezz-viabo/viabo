import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import { CommerceList } from '@/app/management/commerces/components/CommerceList'
import { useCollapseDrawer } from '@theme/hooks'
import { CommerceDetails } from '@/app/management/commerces/components/CommerceDetails'

export const CommerceLayout = () => {
  const { isCollapse } = useCollapseDrawer()

  const [selectedCard, setSelectedCard] = useState(null) // Estado para mantener la tarjeta seleccionada

  // Función para manejar el evento de clic en una tarjeta
  const handleCardClick = card => {
    setSelectedCard(card)
  }

  // Función para manejar el evento de cerrar el contenedor lateral
  const handleCloseDetails = () => {
    setSelectedCard(null)
  }

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
          <CommerceList />
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
          <CommerceDetails />
        </Box>
      </Grid>
    </Grid>
  )
}
