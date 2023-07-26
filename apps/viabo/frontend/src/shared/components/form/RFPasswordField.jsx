import { useState } from 'react'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Field } from 'formik'

export function RFPasswordField({ name, InputProps, ...rest }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Field name={name}>
      {({ field, meta }) => (
        <TextField
          {...field}
          {...rest}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            ...InputProps,
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: 0.5 }}>
                <IconButton size={'small'} edge="end" onClick={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          error={Boolean(meta.touched && meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  )
}
