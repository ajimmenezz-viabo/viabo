import { Field } from 'formik'
import { TextField } from '@mui/material'

export function RFTextField({ name, ...rest }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <TextField
          {...field}
          {...rest}
          error={Boolean(meta.touched && meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  )
}
