import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'
import { FormTradeRegister } from '@/app/business/register/components'
import { Page } from '@/shared/components/containers'

const ContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: '1170px',
  margin: '0 auto',
  minHeight: '600px',
  height: { xs: '100vh', sm: 'calc(100vh - 200px)' },
  zIndex: '100000',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('md')]: {
    borderRadius: '12px',
    boxShadow: '0 0 60px 10px rgb(85 44 44 / 20%)'
  }
}))

const RegisterContainer = styled('div')(({ theme }) => ({
  padding: '0px',
  [theme.breakpoints.up('sm')]: {
    padding: '25px'
  },
  [theme.breakpoints.up('md')]: {
    padding: '50px'
  },
  [theme.breakpoints.up('lg')]: {
    padding: '100px'
  }
}))

function TradeRegister() {
  return (
    <Page title="Registro Comercio">
      <RegisterContainer className="animate__animated animated__fadeIn">
        <ContainerStyle>
          <Grid container spacing={0} component="main">
            <Grid
              item
              component={Paper}
              elevation={0}
              xs={false}
              sm={4}
              md={6}
              sx={{
                borderRadius: '8px 0px 0px 8px',
                backgroundImage: 'url(https://source.unsplash.com/random)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              alignItems="center"
              justify="center"
              component={Paper}
              elevation={10}
              sx={{ borderRadius: '0px 8px 8px 0px' }}
            >
              <FormTradeRegister />
            </Grid>
          </Grid>
        </ContainerStyle>
      </RegisterContainer>
    </Page>
  )
}

export default TradeRegister
