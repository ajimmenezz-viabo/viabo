import { Card, Grid, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'

import { LoginForm } from '@/app/authentication/components'
import { Carousel } from '@/app/authentication/components/Carousel'
import { Page } from '@/shared/components/containers'

const ContainerStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: theme.breakpoints.values.md,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    borderRadius: 0,
    height: '100vh'
  },

  margin: '0 auto',
  backgroundColor: theme.palette.background.paper
}))

const RegisterContainer = styled('div')(({ theme }) => ({
  padding: '0px',
  minHeight: '100vH',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
  // [theme.breakpoints.up('sm')]: {
  //   padding: '0px'
  // },
  // [theme.breakpoints.up('md')]: {
  //   padding: '50px'
  // },
  // [theme.breakpoints.up('lg')]: {
  //   padding: '50px'
  // },
  // [theme.breakpoints.up('xl')]: {
  //   padding: '100px'
  // }
}))

const Login = () => (
  // const carousel = (
  //   <Box sx={{ position: 'relative', overflow: 'hidden' }}>
  //     <Box sx={{ position: 'relative', display: 'flex', height: 1, backgroundColor: '#161C24' }}>
  //       <Box
  //         component={LazyLoadImage}
  //         wrapperClassName="wrapper"
  //         effect={'blur'}
  //         placeholderSrc="https://zone-assets-api.vercel.app/assets/img_placeholder.svg"
  //         sx={{ width: 1, height: 1, objectFit: 'cover' }}
  //         src={INTEGRATION}
  //       />
  //     </Box>
  //   </Box>
  // )

  <Page title="Inicio de Sesión">
    <RegisterContainer>
      <ContainerStyle>
        <Grid component="main" container spacing={0} sx={{ height: 1, width: 1 }}>
          <Grid
            item
            elevation={0}
            xs={false}
            sm={false}
            md={7}
            sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
          >
            <Carousel />
          </Grid>
          <Grid item xs={12} md={5}>
            <Stack justifyContent={'center'} width={1} height={1} sx={{ overflow: 'auto' }}>
              <LoginForm />
            </Stack>
          </Grid>
        </Grid>
      </ContainerStyle>
    </RegisterContainer>
  </Page>
)

export default Login
