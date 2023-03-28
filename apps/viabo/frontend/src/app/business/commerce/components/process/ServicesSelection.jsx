import { AlertTitle, Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import PropTypes from 'prop-types'
import { propTypesStore } from '@/app/business/commerce/store'
import ViaboCard from '@/shared/assets/img/viabo-card.png'
import ViaboPay from '@/shared/assets/img/viabo-pay.png'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { alpha } from '@mui/material/styles'
import { AlertWithFocus } from '@/shared/components/alerts'
import { useSetCommerceServices } from '@/app/business/commerce/hooks'
import { PROCESS_LIST } from '@/app/business/commerce/services'

ServicesSelection.propTypes = {
  store: PropTypes.shape(propTypesStore)
}

const SERVICES = [
  {
    name: 'Viabo Card',
    description:
      'Tarjeta CARNET X VIABO para control de gastos, pago de compensaciones, cash-back y fidelización por perfiles.',
    image: ViaboCard
  },
  {
    name: 'Viabo Pay',
    description: 'Herramienta de cobro/pago por pefiles,transparencia transaccional y alertas.',
    image: ViaboPay
  }
]

const variants = {
  selected: {
    backgroundColor: theme => alpha(theme.palette.primary.main, 0.08),
    borderColor: theme => theme.palette.primary.main
  },
  unselected: {
    backgroundColor: theme => theme.palette.background.neutral,
    borderColor: 'transparent'
  }
}

export function ServicesSelection({ store }) {
  const { setActualProcess, setLastProcess } = store
  const [selectedServices, setSelectedServices] = useState([])
  const [emptyServices, setEmptyServices] = useState(false)
  const { mutate: setServicesToCommerce, isLoading: isAddingServices } = useSetCommerceServices()
  const handleCardClick = service => {
    if (!selectedServices.includes(service.name)) {
      return setSelectedServices([...selectedServices, service.name])
    }

    const filter = selectedServices.filter(selected => selected !== service.name)

    return setSelectedServices(filter)
  }

  const handleSendServices = () => {
    if (selectedServices.length === 0) {
      return setEmptyServices(true)
    }

    // setActualProcess(PROCESS_LIST.COMMERCE_INFO)
    // setLastProcess({ info: selectedServices, name: PROCESS_LIST.SERVICES_SELECTION })
    // setEmptyServices(false)

    return setServicesToCommerce(
      { services: selectedServices },
      {
        onSuccess: () => {
          setActualProcess(PROCESS_LIST.COMMERCE_INFO)
          setLastProcess({ info: selectedServices, name: PROCESS_LIST.SERVICES_SELECTION })
          setEmptyServices(false)
        }
      }
    )
  }

  return (
    <>
      <Stack direction="column" width={1} spacing={1}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Typography variant="h4" color="textPrimary" align="center">
            ¡Bienvenido a Viabo!
          </Typography>
          <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
            Seleccione los servicios para habilitar su ecosistema.
          </Typography>
        </motion.div>
      </Stack>

      {emptyServices && (
        <AlertWithFocus listenElement={emptyServices} sx={{ mb: 5, mx: 2, textAlign: 'initial' }} severity="warning">
          <AlertTitle sx={{ textAlign: 'initial' }}>Servicios</AlertTitle>
          Se debe seleccionar al menos un servicio para continuar con el proceso
        </AlertWithFocus>
      )}

      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Box
          my={3}
          px={2}
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)'
            }
          }}
        >
          {SERVICES.map((service, index) => {
            const isSelected = selectedServices.includes(service.name)

            return (
              <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                <Card
                  onClick={() => handleCardClick(service)}
                  sx={{
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    height: '100%',
                    ...(isSelected ? variants.selected : variants.unselected)
                  }}
                >
                  <CardMedia sx={{ px: { xs: 10, sm: 5 }, pt: 3 }} component="img" image={service.image} />
                  <CardContent>
                    <Typography variant="caption" color={'text.disabled'}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </Box>
      </motion.div>
      <Stack mt={7} px={2}>
        <LoadingButton
          onClick={handleSendServices}
          loading={isAddingServices}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ textTransform: 'uppercase' }}
        >
          Continuar
        </LoadingButton>
      </Stack>
    </>
  )
}

export default ServicesSelection
