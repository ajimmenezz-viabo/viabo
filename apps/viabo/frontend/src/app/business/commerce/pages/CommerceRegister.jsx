import { Box, Grid, Paper } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { RegisterProcess } from '@/app/business/commerce/components'
import INTEGRATION from '@/shared/assets/img/integracion-tecnologica.png'
import { Page } from '@/shared/components/containers'

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.1)
}))

const ContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: theme.breakpoints.values.lg,
  [theme.breakpoints.down('xl')]: {
    maxWidth: '100%'
  },
  margin: '0 auto',
  height: '100%',
  overflow: 'auto',
  zIndex: '100000',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '0px',
  [theme.breakpoints.up('xl')]: {
    borderRadius: '16px',
    boxShadow: '0 0 60px 10px rgb(85 44 44 / 20%)'
  }
}))

const RegisterContainer = styled('div')(({ theme }) => ({
  padding: '0px',
  height: '100%',
  [theme.breakpoints.up('sm')]: {
    padding: '0px'
  },
  [theme.breakpoints.up('md')]: {
    padding: '0px'
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0px'
  },
  [theme.breakpoints.up('xl')]: {
    padding: '100px'
  }
}))

function CommerceRegister() {
  return (
    <Page title="Registro Comercio">
      <RegisterContainer className="animate__animated animated__fadeIn">
        <ContainerStyle>
          <Grid container spacing={0} component="main" justifyContent={'center'}>
            <Grid item elevation={0} xs={false} sm={false} md={6}>
              <Box sx={{ position: 'relative', display: 'flex', height: 1, backgroundColor: '#161C24' }}>
                <OverlayStyle />
                <Box
                  component={LazyLoadImage}
                  wrapperClassName="wrapper"
                  effect={'blur'}
                  placeholderSrc="https://zone-assets-api.vercel.app/assets/img_placeholder.svg"
                  sx={{ width: 1, height: 1, objectFit: 'cover' }}
                  src={INTEGRATION}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              alignItems="center"
              justify="center"
              component={Paper}
              elevation={10}
              sx={{ overflow: 'auto', borderRadius: { md: 0, xl: '0px 16px 16px 0px' } }}
            >
              <RegisterProcess />
            </Grid>
          </Grid>
        </ContainerStyle>
      </RegisterContainer>
    </Page>
  )
}

export default CommerceRegister
