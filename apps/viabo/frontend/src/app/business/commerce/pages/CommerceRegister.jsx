import { styled } from '@mui/material/styles'
import { Grid, Paper } from '@mui/material'
import { RegisterProcess } from '@/app/business/commerce/components'
import { Page } from '@/shared/components/containers'

const ContainerStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  maxWidth: theme.breakpoints.values.lg,
  margin: '0 auto',
  height: '100%',
  zIndex: '100000',
  justifyContent: 'center',
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

function CommerceRegister() {
  return (
    <Page title="Registro Comercio">
      <RegisterContainer className="animate__animated animated__fadeIn">
        <ContainerStyle>
          <Grid container spacing={0} component="main" justifyContent={'center'}>
            <Grid
              item
              component={Paper}
              elevation={0}
              xs={false}
              sm={false}
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
              sm={12}
              md={6}
              alignItems="center"
              justify="center"
              component={Paper}
              elevation={10}
              sx={{ borderRadius: '0px 8px 8px 0px' }}
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
