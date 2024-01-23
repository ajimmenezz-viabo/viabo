import { LoadingButton } from '@mui/lab'
import { FormControl, InputLabel, MenuItem, Stack, Typography } from '@mui/material'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { banksNames } from '@/app/shared/_mock/banks'
import { RightPanel } from '@/app/shared/components'
import { FormProvider, RFSimpleSelect, RFTextField } from '@/shared/components/form'
import { Scrollbar } from '@/shared/components/scroll'

const NewBeneficiaryDrawer = ({ open, setOpen }) => {
  const ValidationSchema = Yup.object().shape({
    name: Yup.string().trim().max(100, 'Máximo 100 caracteres').required('Es necesario la causa'),
    alias: Yup.string().trim().max(100, 'Máximo 100 caracteres'),
    key: Yup.string().trim().max(20, 'Máximo 20 caracteres').required('Es necesario la clabe'),
    bank: Yup.string().required('Es necesario el banco')
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      alias: '',
      key: '',
      bank: ''
    },
    enableReinitialize: true,
    validationSchema: ValidationSchema,
    onSubmit: (values, { setSubmitting, setFieldValue }) => {}
  })

  const { isSubmitting } = formik

  const loading = isSubmitting

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <RightPanel open={open} handleClose={handleClose} titleElement={'Nuevo Beneficiario'}>
      {open && (
        <Scrollbar containerProps={{ sx: { flexGrow: 0, height: 'auto' } }}>
          <FormProvider formik={formik}>
            <Stack spacing={2} sx={{ p: 3 }}>
              <Stack spacing={1}>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Nombre *
                </Typography>

                <RFTextField name={'cause'} placeholder={'Nombre del titular de la cuenta...'} disabled={loading} />
              </Stack>

              <Stack spacing={1}>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Alias
                </Typography>

                <RFTextField name={'cause'} placeholder={'Alias de la cuenta...'} disabled={loading} />
              </Stack>

              <Stack spacing={1}>
                <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Clabe Interbancaria
                </Typography>

                <RFTextField name={'key'} disabled={loading} placeholder={'Clabe...'} />
              </Stack>

              <Stack spacing={1} pt={2}>
                {/* <Typography paragraph variant="overline" sx={{ color: 'text.disabled' }}>
                  Banco
                </Typography> */}
                <FormControl fullWidth required disabled={loading}>
                  <InputLabel id="month-select-label">Banco</InputLabel>
                  <RFSimpleSelect label={'Banco'} labelId="month-select-label" name={'bank'} disabled={loading}>
                    {banksNames.map((bank, index) => (
                      <MenuItem key={index} value={index}>
                        {bank}
                      </MenuItem>
                    ))}
                  </RFSimpleSelect>
                </FormControl>
              </Stack>

              <Stack sx={{ pt: 1 }}>
                <LoadingButton
                  size={'large'}
                  loading={loading}
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Crear
                </LoadingButton>
              </Stack>
            </Stack>
          </FormProvider>
        </Scrollbar>
      )}
    </RightPanel>
  )
}

export default NewBeneficiaryDrawer
