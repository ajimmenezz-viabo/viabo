import { Box, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

import CommercePaymentLink from './CommercePaymentLinkNotFound'

import { CommercePayment } from '../components/CommercePayment'
import { useFindCommerceInfoBySlug } from '../hooks'

import { Page } from '@/shared/components/containers'
import { RequestLoadingComponent } from '@/shared/components/loadings'

const PublicPayments = () => {
  const { slug } = useParams()

  const { isLoading, isError } = useFindCommerceInfoBySlug(slug, {
    enabled: !!slug
  })

  return (
    <Page
      title="Pagos Viabo"
      meta={
        <>
          <meta name="description" content={`Servicio de pagos de Viabo`} />
          <meta
            name="keywords"
            content={`viabo pay, liga de pago, pago en linea,servició de pago,paypal,paycash,viabo card,payments,pagos viabo`}
          />
          <meta property="og:title" content={`Liga publica para pagos del comercio | VIABO`} />
          <meta
            property="og:description"
            content={`Esta es la página de un comercio donde se pueden generar pagos mediante tarjeta o una liga de paycash`}
          />
          <meta property="og:image" content={`/landingPage/img/instagram-3.jpg`} />
        </>
      }
    >
      <Box component={'main'} height={1} m={0} p={0}>
        <Stack alignItems={'center'} justifyContent={'center'} minHeight={'100dvH'}>
          {isLoading && <RequestLoadingComponent />}
          {!isLoading && isError && <CommercePaymentLink />}
          {!isLoading && !isError && <CommercePayment />}
        </Stack>
      </Box>
    </Page>
  )
}

export default PublicPayments
