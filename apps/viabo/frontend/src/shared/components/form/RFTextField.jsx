import { TextField } from '@mui/material'
import { useField } from 'formik'

export function RFTextField({ name, ...rest }) {
  const [field, meta, helpers] = useField(name)

  return (
    <TextField
      {...field}
      {...rest}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
    />
  )
}
