import { Card, CardHeader, Link, List, ListItem, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { documentList } from '@/app/business/commerce/services'
import { AnimatePresence, m } from 'framer-motion'
import { varFade } from '@/shared/components/animate'
import { InsertDriveFile } from '@mui/icons-material'

export function Documents({ documents }) {
  const theme = useTheme()
  const files = Object.keys(documentList)

  return (
    <Card sx={{ p: 5 }}>
      <CardHeader
        title="Documentos"
        subheader={`${documents?.length} archivos`}
        sx={{
          p: 0,
          mb: 3,
          '& .MuiCardHeader-action': { alignSelf: 'center' }
        }}
      />
      <List disablePadding sx={{ my: 3 }}>
        <AnimatePresence>
          {documents?.map(file => (
            <FileItem key={file?.id} file={file} />
          ))}
        </AnimatePresence>
      </List>
    </Card>
  )
}

function FileItem({ file }) {
  return (
    <ListItem
      component={m.div}
      {...varFade().inRight}
      sx={{
        my: 2,
        px: 2,
        py: 0.75,
        borderRadius: 0.75,
        border: theme => `solid 1px ${theme.palette.divider}`
      }}
    >
      <InsertDriveFile sx={{ width: 28, height: 28, color: 'text.secondary', mr: 2 }} />
      <Stack>
        <Typography variant={'subtitle2'}>
          {' '}
          <Link href={file?.path} target="_blank">
            {file?.name}
          </Link>
        </Typography>
        {/* <Stack direction={'row'} spacing={1} alignItems={'center'} sx={{ fontWeight: 400 }}> */}
        {/*  <Typography variant={'caption'} color={'text.secondary'}> */}
        {/*    20MB */}
        {/*  </Typography> */}
        {/*  <Box sx={{ width: '2px', height: '2px', borderRadius: '50%', bgcolor: 'text.secondary' }} /> */}
        {/*  <Typography variant={'caption'} color={'text.secondary'}> */}
        {/*    {fDateTime(new Date())} */}
        {/*  </Typography> */}
        {/* </Stack> */}
      </Stack>
    </ListItem>
  )
}
