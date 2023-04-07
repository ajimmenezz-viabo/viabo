import PropTypes from 'prop-types'
import { propTypesStore } from '@/app/business/commerce/store'
import { Alert, Box, Card, Grid, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { documentList, documentTypes } from '@/app/business/commerce/services'
import DocumentDropzone from '@/app/business/commerce/components/process/documentation/DocumentDropZone'
import { LoadingButton } from '@mui/lab'
import { useMemo } from 'react'

CommerceDocumentation.propTypes = {
  store: PropTypes.shape(propTypesStore)
}
export default function CommerceDocumentation({ store }) {
  const formik = useFormik({
    initialValues: {
      ACTA_CONSTITUTIVA: null,
      DOCUMENTO_PODER: null,
      IDENTIFICACION: null,
      CEDULA_FISCAL_EMPRESA: null,
      CEDULA_FISCAL_APODERADO: null,
      COMPROBANTE_DOMICILIO: null,
      moralPerson: true
    },

    onSubmit: values => {}
  })

  const {
    handleSubmit,
    getFieldProps,
    touched,
    errors,
    resetForm,
    values,
    setSubmitting,
    isSubmitting,
    setFieldValue,
    handleChange,
    handleBlur
  } = formik

  const filterDocuments = useMemo(
    () =>
      Object.keys(documentList).filter(document => {
        if (values.moralPerson) {
          return document
        }
        return documentList[document].moralPerson === false || documentList[document].moralPerson === 'all'
      }),
    [values.moralPerson]
  )

  return (
    <>
      <Stack direction="column" width={1} spacing={1}>
        <Typography variant="h4" color="textPrimary" align="center">
          Documentación del Comercio
        </Typography>
        <Typography paragraph align="center" variant="body1" color={'text.secondary'} whiteSpace="pre-line">
          Ingrese los documentos necesarios del comercio para continuar con el proceso
        </Typography>
      </Stack>
      <Box width={1} py={4} component={'form'} onSubmit={handleSubmit}>
        <Stack spacing={4} justifyContent={'center'} alignItems={'center'}>
          <ToggleButtonGroup
            color="primary"
            value={values?.moralPerson}
            exclusive
            onChange={(event, newValue) => {
              setFieldValue('moralPerson', newValue)
            }}
            aria-label="Platform"
          >
            <ToggleButton value={true}>Persona Moral</ToggleButton>
            <ToggleButton value={false}>Persona Física</ToggleButton>
          </ToggleButtonGroup>
          <Grid container spacing={2}>
            {filterDocuments?.map(name => (
              <Grid item key={name} xs={12} md={6} lg={4} xl={4}>
                <Card sx={{ p: 0, borderRadius: 1 }}>
                  <Typography pt={2} variant="subtitle2" color="textPrimary" align="center">
                    {documentTypes[name]}
                  </Typography>
                  {values[name] && (
                    <Typography variant="caption" color="textPrimary" align="center">
                      {values[name]?.path}
                    </Typography>
                  )}
                  {documentList[name].expiration && (
                    <Alert
                      sx={{
                        borderRadius: 0,
                        textAlign: 'center',
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex'
                      }}
                      variant={'standard'}
                      icon={false}
                      color={'warning'}
                    >
                      <Typography variant="caption" color="textSecondary" align="center">
                        {documentList[name].expiration}
                      </Typography>
                    </Alert>
                  )}
                  <DocumentDropzone
                    name={name}
                    accept={documentList[name].accept}
                    setFieldValue={setFieldValue}
                    file={values[name]}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <LoadingButton
            loading={isSubmitting}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ textTransform: 'uppercase' }}
          >
            Guardar
          </LoadingButton>
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Stack>
      </Box>
    </>
  )
}
