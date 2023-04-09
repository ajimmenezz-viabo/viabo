import { Box, Button, Stack, Typography } from '@mui/material'
import support from '@/shared/assets/img/support.svg'
import PropTypes from 'prop-types'
import { propTypesStore } from '@/app/business/commerce/store'
import { PROCESS_LIST } from '@/app/business/commerce/services'

FinishProcess.propTypes = {
  store: PropTypes.shape(propTypesStore)
}

function FinishProcess({ store }) {
  const { setActualProcess, setLastProcess } = store
  const handleReturn = () => {
    setActualProcess(PROCESS_LIST.REGISTER)
    setLastProcess()
  }

  return (
    <Stack spacing={5}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img className="animate__animated animate__pulse" src={support} width="50%" alt="Support Assistant" />
      </Box>
      <Typography variant="h3" color="textPrimary" align="center">
        Un asesor de Viabo se contactará para brindarle un mejor seguimiento a su proceso
      </Typography>
      <Button color="primary" variant="outlined" onClick={handleReturn} fullWidth sx={{ textTransform: 'uppercase' }}>
        Entendido
      </Button>
    </Stack>
  )
}

export default FinishProcess
