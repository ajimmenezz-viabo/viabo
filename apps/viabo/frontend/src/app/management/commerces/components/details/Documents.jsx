import { Alert, Box, Card, CardHeader, Collapse, Link, List, ListItem, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { documentList } from '@/app/business/commerce/services'
import { AnimatePresence, m } from 'framer-motion'
import { varFade } from '@/shared/components/animate'
import { InsertDriveFile } from '@mui/icons-material'
import {
  DetailsComponents,
  SuccessIconDetails,
  WarningIconDetails
} from '@/app/management/commerces/components/details/DetailsComponents'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export function Documents({ documents, expanded, handleChange, status }) {
  const theme = useTheme()
  const files = Object.keys(documentList)
  const isExpanded = Boolean(expanded === 'documents')
  const available = Boolean(documents?.length > 0)

  return (
    <Card
      sx={{
        p: 5,
        border: isExpanded ? 3 : 0,
        borderColor: isExpanded
          ? theme => (theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main)
          : 'inherit'
      }}
    >
      <Stack display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center">
        <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
          {available ? (
            <SuccessIconDetails widthWrapper={25} heightWrapper={25} opacity={0.2} sx={{ width: 15, height: 15 }} />
          ) : (
            <WarningIconDetails />
          )}
          <Typography variant="subtitle1" color="textPrimary">
            Documentos
          </Typography>
        </Stack>
        <Box sx={{ flex: '1 1 auto' }} />
        <DetailsComponents
          expand={isExpanded}
          onClick={() => {
            handleChange('documents')
          }}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </DetailsComponents>
      </Stack>
      <Collapse in={isExpanded} timeout="auto">
        {!available ? (
          <Alert sx={{ mt: 3 }} severity="warning" variant={'filled'}>
            <Typography variant="body2">No se han cargado documentos legales del comercio!</Typography>
            <Typography variant="caption">
              Etapa de registro: <b>{status?.step}</b>
            </Typography>
          </Alert>
        ) : (
          <>
            <CardHeader
              title=""
              subheader={`${documents?.length} archivos`}
              sx={{
                p: 0,
                my: 3,
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
          </>
        )}
      </Collapse>
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
