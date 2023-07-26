import { Stack } from '@mui/material'

import { UploadIllustration } from '@/shared/components/illustrations'

export default function BlockContent() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column', md: 'row' }}
      sx={{ height: 130, textAlign: { xs: 'center', md: 'left' } }}
    >
      <UploadIllustration sx={{ width: '50%' }} />

      {/* <Box sx={{ p: 3 }}> */}
      {/*  <Typography gutterBottom variant="h5"> */}
      {/*    Arrastra ó Selecciona el archivo */}
      {/*  </Typography> */}

      {/*  <Typography variant="body2" sx={{ color: 'text.secondary' }}> */}
      {/*    Arrastra los archivos aqui o haz clic para&nbsp; */}
      {/*    <Typography variant="body2" component="span" sx={{ color: 'primary.main', textDecoration: 'underline' }}> */}
      {/*      buscar */}
      {/*    </Typography> */}
      {/*    &nbsp;en tu equipo */}
      {/*  </Typography> */}
      {/* </Box> */}
    </Stack>
  )
}
