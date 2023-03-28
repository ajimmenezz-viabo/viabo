import { Alert } from '@mui/material'
import { useEffect, useRef } from 'react'

export function AlertWithFocus({ children, listenElement, ...props }) {
  const alertRef = useRef(null)

  useEffect(() => {
    if (listenElement) {
      // Hacer scroll o enfocar en la alerta
      alertRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }) // O focus()
    }
  }, [listenElement])

  return (
    <Alert ref={alertRef} {...props}>
      {children}
    </Alert>
  )
}
